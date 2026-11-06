<#
.SYNOPSIS
    Lightweight, Zero-Dependency Local HTTP Server for AliExpress Affiliate Marketplace
    Runs on any Windows machine using standard PowerShell.
#>

param(
    [int]$Port = 3000
)

$baseDir = $PSScriptRoot
if (-not $baseDir) { $baseDir = Get-Location }

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    Write-Host "Port $Port is in use or requires elevation. Trying port 8080..." -ForegroundColor Yellow
    $Port = 8080
    $prefix = "http://localhost:$Port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix)
    $listener.Start()
}

Write-Host "==========================================================" -ForegroundColor Green
Write-Host "  ALIEXPRESS AFFILIATE MARKETPLACE IS RUNNING!            " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Green
Write-Host " Local Storefront:  http://localhost:$Port/index.html     " -ForegroundColor White
Write-Host " Admin Dashboard:   http://localhost:$Port/admin.html     " -ForegroundColor Yellow
Write-Host " Admin PIN:         marketali2026                         " -ForegroundColor Gray
Write-Host " Press Ctrl+C in this window to stop the server.          " -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Green

# Open in default browser
Start-Process "http://localhost:$Port/index.html"

# MIME Types Dictionary
$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".webp" = "image/webp"
    ".txt"  = "text/plain"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($rawPath)) {
            $rawPath = "index.html"
        }

        # Resolve local file path
        $filePath = Join-Path $baseDir $rawPath
        $filePath = [System.IO.Path]::GetFullPath($filePath)

        # Security check: ensure path is within base directory
        if (-not $filePath.StartsWith($baseDir, [System.StringComparison]::OrdinalIgnoreCase)) {
            $response.StatusCode = 403
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("403 Forbidden")
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.Close()
            continue
        }

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $contentType = $mimeTypes[$ext]
            }

            $response.ContentType = $contentType
            $response.Headers.Add("Access-Control-Allow-Origin", "*")
            $response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }

        $response.Close()
    } catch {
        # Ignore client disconnects
    }
}

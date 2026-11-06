$destDir = Join-Path $PSScriptRoot "images\products"
if (!(Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }

$items = @(
    @{ file="lenovo-earbuds.jpg"; url="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80" },
    @{ file="gan-charger.jpg"; url="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80" },
    @{ file="mechanical-keyboard.jpg"; url="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80" },
    @{ file="magsafe-powerbank.jpg"; url="https://images.unsplash.com/photo-1609592807901-4d3753b022b7?w=800&auto=format&fit=crop&q=80" },
    @{ file="phone-case.jpg"; url="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=80" },
    @{ file="windbreaker-jacket.jpg"; url="https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80" },
    @{ file="knit-cardigan.jpg"; url="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=80" },
    @{ file="running-sneakers.jpg"; url="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80" },
    @{ file="cloud-slides.jpg"; url="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&auto=format&fit=crop&q=80" },
    @{ file="pagani-watch.jpg"; url="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80" },
    @{ file="smartwatch.jpg"; url="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80" },
    @{ file="flame-diffuser.jpg"; url="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=80" },
    @{ file="veggie-chopper.jpg"; url="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80" },
    @{ file="hair-dryer.jpg"; url="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80" },
    @{ file="ipl-laser.jpg"; url="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&auto=format&fit=crop&q=80" },
    @{ file="camping-tent.jpg"; url="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80" },
    @{ file="resistance-bands.jpg"; url="https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&auto=format&fit=crop&q=80" },
    @{ file="gps-drone.jpg"; url="https://images.unsplash.com/photo-1507582020432-2a3bc4ff723c?w=800&auto=format&fit=crop&q=80" },
    @{ file="r36s-console.jpg"; url="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80" },
    @{ file="dashcam.jpg"; url="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80" },
    @{ file="car-vacuum.jpg"; url="https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80" },
    @{ file="label-printer.jpg"; url="https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop&q=80" },
    @{ file="ultrasonic-cleaner.jpg"; url="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80" },
    @{ file="bt-speaker.jpg"; url="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80" },
    @{ file="usb-hub.jpg"; url="https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=800&auto=format&fit=crop&q=80" },
    @{ file="wireless-dock.jpg"; url="https://images.unsplash.com/photo-1622445262464-84b14e3295b6?w=800&auto=format&fit=crop&q=80" },
    @{ file="streetwear-hoodie.jpg"; url="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80" },
    @{ file="hiking-boots.jpg"; url="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80" },
    @{ file="robot-vacuum.jpg"; url="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80" },
    @{ file="tactical-backpack.jpg"; url="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80" },
    @{ file="obd-scanner.jpg"; url="https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=800&auto=format&fit=crop&q=80" }
)

$downloaded = 0
foreach ($it in $items) {
    $outPath = Join-Path $destDir $it.file
    try {
        & curl.exe -s -L --max-time 15 -o $outPath $it.url
        if ((Test-Path $outPath) -and ((Get-Item $outPath).Length -gt 1000)) {
            $downloaded++
            Write-Host "Downloaded: $($it.file) ($((Get-Item $outPath).Length) bytes)"
        } else {
            Write-Warning "Failed or too small: $($it.file)"
        }
    } catch {
        Write-Warning "Error downloading $($it.file): $_"
    }
}

Write-Host "Completed: $downloaded / $($items.Count) real product photos downloaded."

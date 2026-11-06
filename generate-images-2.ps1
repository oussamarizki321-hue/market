$destDir = Join-Path $PSScriptRoot "images\products"

function Save-Svg($filename, $svgContent) {
    $filePath = Join-Path $destDir $filename
    [System.IO.File]::WriteAllText($filePath, $svgContent, [System.Text.Encoding]::UTF8)
    Write-Host "Created: $filename"
}

# 1. IPL Laser Hair Remover
$iplSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#FBF4F8"/><stop offset="100%" stop-color="#EFE2EB"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.16"/></filter>
    <linearGradient id="rose" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFF0F5"/><stop offset="100%" stop-color="#F8BBD0"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#FCE4EC" stroke="#F48FB1"/><text x="495" y="17" fill="#880E4F" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">999,999 Flashes • Ice Cool</text></g>
  <ellipse cx="300" cy="510" rx="130" ry="20" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(200, 110)">
    <!-- Ergonomic Hair Removal Handset -->
    <path d="M 40 40 Q 100 0 160 40 L 150 150 Q 140 280 120 360 L 80 360 Q 60 280 50 150 Z" fill="url(#rose)" stroke="#EC407A" stroke-width="2"/>
    <!-- Sapphire Ice-Cool Flash Window -->
    <rect x="65" y="45" width="70" height="40" rx="8" fill="#00E5FF" stroke="#00B0FF" stroke-width="2"/>
    <rect x="75" y="55" width="50" height="20" rx="4" fill="#E0F7FA"/>
    <!-- Flash Intensity Pulse Button with Golden Ring -->
    <circle cx="100" cy="180" r="22" fill="#FFFFFF" stroke="#FFD54F" stroke-width="4"/>
    <circle cx="100" cy="180" r="14" fill="#EC407A"/>
    <!-- Digital LCD Flash Counter -->
    <rect x="65" y="240" width="70" height="35" rx="8" fill="#1A237E"/>
    <text x="100" y="262" fill="#00E5FF" font-family="monospace" font-weight="bold" font-size="12" text-anchor="middle">999999</text>
  </g>
</svg>
'@
Save-Svg "ipl-laser.svg" $iplSvg

# 2. Camping Tent
$tentSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F7F4"/><stop offset="100%" stop-color="#D6E8DC"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.16"/></filter>
    <linearGradient id="tent" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2E7D32"/><stop offset="100%" stop-color="#1B5E20"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#E8F5E9" stroke="#81C784"/><text x="495" y="17" fill="#1B5E20" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">Automatic 3s • 3-4 Person</text></g>
  <ellipse cx="300" cy="490" rx="220" ry="26" fill="#000" opacity="0.16" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(90, 160)">
    <!-- Dome Camping Tent Body -->
    <path d="M 210 20 L 30 290 L 390 290 Z" fill="url(#tent)"/>
    <!-- Top Hydraulic Spring Hub -->
    <circle cx="210" cy="20" r="14" fill="#FF9800" stroke="#E65100" stroke-width="3"/>
    <!-- Tent Skeleton Poles Cross Ribs -->
    <path d="M 210 20 Q 100 160 30 290" stroke="#FF9800" stroke-width="4" fill="none"/>
    <path d="M 210 20 Q 320 160 390 290" stroke="#FF9800" stroke-width="4" fill="none"/>
    <!-- Dual Zipper Door Opening -->
    <path d="M 210 70 L 120 290 L 300 290 Z" fill="#37474F"/>
    <path d="M 210 70 L 150 290 L 270 290 Z" fill="#263238" stroke="#FF5722" stroke-width="2"/>
    <!-- Silver UV Sunshade Inner Lining -->
    <path d="M 210 20 L 210 290" stroke="#E0E0E0" stroke-width="2" stroke-dasharray="4 4"/>
  </g>
</svg>
'@
Save-Svg "camping-tent.svg" $tentSvg

# 3. Resistance Workout Bands
$bandsSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F5F5F5"/><stop offset="100%" stop-color="#E0E0E0"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.16"/></filter>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#FFF3E0" stroke="#FFB74D"/><text x="495" y="17" fill="#E65100" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">11-Piece Set • Up to 150 LBS</text></g>
  <ellipse cx="300" cy="490" rx="190" ry="24" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(100, 140)">
    <!-- 5 Colorful Stacking Resistance Tubes -->
    <path d="M 40 80 Q 200 40 360 80" stroke="#FFEB3B" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M 40 120 Q 200 80 360 120" stroke="#00E676" stroke-width="14" stroke-linecap="round" fill="none"/>
    <path d="M 40 160 Q 200 120 360 160" stroke="#FF1744" stroke-width="16" stroke-linecap="round" fill="none"/>
    <path d="M 40 200 Q 200 160 360 200" stroke="#2979FF" stroke-width="18" stroke-linecap="round" fill="none"/>
    <path d="M 40 240 Q 200 200 360 240" stroke="#212121" stroke-width="20" stroke-linecap="round" fill="none"/>
    <!-- Steel Carabiner Clamping Clips -->
    <rect x="25" y="60" width="25" height="200" rx="8" fill="#78909C"/>
    <rect x="350" y="60" width="25" height="200" rx="8" fill="#78909C"/>
    <!-- Cushioned Foam Workout Handles -->
    <rect x="10" y="280" width="60" height="20" rx="10" fill="#212121"/>
    <rect x="330" y="280" width="60" height="20" rx="10" fill="#212121"/>
  </g>
</svg>
'@
Save-Svg "resistance-bands.svg" $bandsSvg

# 4. Cordless Car Vacuum
$vacuumSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F4F7"/><stop offset="100%" stop-color="#DCE2EC"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.18"/></filter>
    <linearGradient id="vacBody" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#37474F"/><stop offset="100%" stop-color="#212121"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#ECEFF1" stroke="#B0BEC5"/><text x="495" y="17" fill="#263238" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">6000Pa Strong • Cordless</text></g>
  <ellipse cx="300" cy="480" rx="170" ry="22" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(100, 220)">
    <!-- Slender Metallic Cylindrical Body -->
    <rect x="140" y="30" width="230" height="70" rx="35" fill="url(#vacBody)" stroke="#546E7A" stroke-width="2"/>
    <!-- Clear Dust Bin Front -->
    <path d="M 140 35 L 70 50 L 70 80 L 140 95 Z" fill="#90A4AE" opacity="0.7"/>
    <!-- Suction Nozzle Tip -->
    <path d="M 70 52 L 20 58 L 20 72 L 70 78 Z" fill="#263238"/>
    <!-- Power Button & Battery LED -->
    <circle cx="260" cy="65" r="14" fill="#455A64" stroke="#00E5FF" stroke-width="2"/>
    <circle cx="260" cy="65" r="5" fill="#00E5FF"/>
    <!-- Brand -->
    <text x="320" y="70" fill="#B0BEC5" font-family="Arial" font-weight="900" font-size="12" letter-spacing="2">BASEUS</text>
  </g>
</svg>
'@
Save-Svg "car-vacuum.svg" $vacuumSvg

# 5. Niimbot Thermal Label Maker
$printerSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F5F8"/><stop offset="100%" stop-color="#DCE4EC"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.18"/></filter>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#E0F2F1" stroke="#80CBC4"/><text x="495" y="17" fill="#004D40" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">Bluetooth • Inkless Thermal</text></g>
  <ellipse cx="300" cy="490" rx="140" ry="22" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(190, 140)">
    <!-- Compact Handheld Printer Body -->
    <rect x="0" y="0" width="220" height="310" rx="36" fill="#FFFFFF" stroke="#CFD8DC" stroke-width="2"/>
    <!-- Label Dispenser Slot at Top -->
    <rect x="40" y="30" width="140" height="14" rx="4" fill="#37474F"/>
    <!-- Dispensed Printed Label Rolling Out -->
    <rect x="55" y="-30" width="110" height="65" rx="4" fill="#FFF9C4" stroke="#FBC02D"/>
    <text x="110" y="0" fill="#212121" font-family="monospace" font-weight="bold" font-size="14" text-anchor="middle">OFFICE #01</text>
    <!-- Circular Power / Print Button with Ring -->
    <circle cx="110" cy="180" r="32" fill="#ECEFF1" stroke="#00B0FF" stroke-width="3"/>
    <circle cx="110" cy="180" r="14" fill="#00B0FF"/>
    <!-- Brand -->
    <text x="110" y="270" fill="#90A4AE" font-family="Arial" font-weight="900" font-size="14" letter-spacing="3" text-anchor="middle">NIIMBOT</text>
  </g>
</svg>
'@
Save-Svg "label-printer.svg" $printerSvg

# 6. Ultrasonic Jewelry Cleaner
$cleanerSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F4F7"/><stop offset="100%" stop-color="#D6DFEB"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="15" flood-color="#000" flood-opacity="0.18"/></filter>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#E1F5FE" stroke="#81D4FA"/><text x="495" y="17" fill="#0277BD" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">45,000Hz • 304 Steel Bath</text></g>
  <ellipse cx="300" cy="480" rx="180" ry="24" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(130, 180)">
    <!-- Ultrasonic Cleaner Tank Shell -->
    <rect x="0" y="40" width="340" height="190" rx="28" fill="#FFFFFF" stroke="#CFD8DC" stroke-width="2"/>
    <!-- Top Stainless Steel Water Basin Bath -->
    <ellipse cx="170" cy="65" rx="140" ry="45" fill="#B0BEC5"/>
    <ellipse cx="170" cy="65" rx="130" ry="38" fill="#00E5FF" opacity="0.65"/>
    <!-- Cavitation Bubbles Cleaning Ring -->
    <circle cx="170" cy="65" r="22" fill="none" stroke="#FFD700" stroke-width="6"/>
    <polygon points="170,40 176,50 164,50" fill="#00E5FF"/>
    <circle cx="140" cy="60" r="4" fill="#FFF"/>
    <circle cx="190" cy="55" r="5" fill="#FFF"/>
    <circle cx="210" cy="65" r="3" fill="#FFF"/>
    <!-- Front One-touch Button & LED -->
    <circle cx="170" cy="165" r="18" fill="#ECEFF1" stroke="#00B0FF" stroke-width="2"/>
    <text x="170" y="170" fill="#00B0FF" font-family="Arial" font-weight="bold" font-size="11" text-anchor="middle">3 MIN</text>
  </g>
</svg>
'@
Save-Svg "ultrasonic-cleaner.svg" $cleanerSvg

Write-Host "Remaining 6 SVGs created successfully!"

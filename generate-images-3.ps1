$destDir = Join-Path $PSScriptRoot "images\products"

function Save-Svg($filename, $svgContent) {
    $filePath = Join-Path $destDir $filename
    [System.IO.File]::WriteAllText($filePath, $svgContent, [System.Text.Encoding]::UTF8)
    Write-Host "Created: $filename"
}

# 1. Anker Bluetooth Speaker
Save-Svg "bt-speaker.svg" @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs><radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#E2E7ED"/></radialGradient></defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <ellipse cx="300" cy="480" rx="180" ry="24" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g transform="translate(130, 200)">
    <rect x="0" y="30" width="340" height="150" rx="30" fill="#1C1F24" stroke="#3A404A" stroke-width="2"/>
    <rect x="15" y="45" width="310" height="120" rx="20" fill="#121417"/>
    <circle cx="95" cy="105" r="38" fill="#252A30" stroke="#00E5FF" stroke-width="2"/>
    <circle cx="245" cy="105" r="38" fill="#252A30" stroke="#00E5FF" stroke-width="2"/>
    <rect x="150" y="90" width="40" height="30" rx="4" fill="#FF5252"/>
    <text x="170" y="110" fill="#FFF" font-family="Arial" font-weight="900" font-size="11" text-anchor="middle">BASS</text>
  </g>
</svg>
'@

# 2. UGREEN 10-in-1 Hub
Save-Svg "usb-hub.svg" @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs><radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#E2E7ED"/></radialGradient></defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <ellipse cx="300" cy="480" rx="150" ry="22" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g transform="translate(180, 130)">
    <path d="M 120 0 Q 120 100 80 120" stroke="#455A64" stroke-width="8" fill="none"/>
    <rect x="30" y="100" width="180" height="320" rx="24" fill="#37474F" stroke="#607D8B" stroke-width="2"/>
    <rect x="55" y="140" width="40" height="16" rx="4" fill="#0D47A1"/><text x="135" y="152" fill="#FFF" font-family="Arial" font-size="11">USB 3.0</text>
    <rect x="55" y="180" width="40" height="16" rx="4" fill="#0D47A1"/><text x="135" y="192" fill="#FFF" font-family="Arial" font-size="11">USB 3.0</text>
    <rect x="55" y="220" width="40" height="16" rx="4" fill="#FF6D00"/><text x="135" y="232" fill="#FFF" font-family="Arial" font-size="11">100W PD</text>
    <rect x="55" y="260" width="40" height="16" rx="4" fill="#2E7D32"/><text x="135" y="272" fill="#FFF" font-family="Arial" font-size="11">4K HDMI</text>
    <rect x="55" y="300" width="40" height="16" rx="4" fill="#546E7A"/><text x="135" y="312" fill="#FFF" font-family="Arial" font-size="11">Gigabit LAN</text>
  </g>
</svg>
'@

# 3. 3-in-1 Foldable Wireless Charging Station
Save-Svg "wireless-dock.svg" @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs><radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#E2E7ED"/></radialGradient></defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <ellipse cx="300" cy="480" rx="170" ry="24" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g transform="translate(130, 160)">
    <rect x="0" y="200" width="340" height="50" rx="16" fill="#212121"/>
    <!-- Phone Stand Angle -->
    <rect x="40" y="30" width="110" height="180" rx="20" fill="#2E3440" stroke="#00E5FF" stroke-width="2"/>
    <circle cx="95" cy="110" r="32" fill="none" stroke="#00E5FF" stroke-width="3" stroke-dasharray="8 6"/>
    <!-- Watch Stand Pad -->
    <circle cx="210" cy="110" r="30" fill="#3B4252" stroke="#88C0D0" stroke-width="2"/>
    <!-- Earbuds Charging Indentation -->
    <ellipse cx="280" cy="190" rx="28" ry="14" fill="#181B20" stroke="#A3BE8C"/>
  </g>
</svg>
'@

# 4. Urban Streetwear Hoodie
Save-Svg "streetwear-hoodie.svg" @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs><radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#E2E7ED"/></radialGradient></defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <ellipse cx="300" cy="510" rx="170" ry="24" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g transform="translate(140, 120)">
    <path d="M 110 50 Q 160 10 210 50 L 190 90 Q 160 80 130 90 Z" fill="#212121"/>
    <!-- Body -->
    <path d="M 80 80 L 10 260 L 60 275 L 100 130 L 90 350 L 230 350 L 220 130 L 260 275 L 310 260 L 240 80 Z" fill="#2E3440"/>
    <!-- Kangaroo Pocket -->
    <path d="M 110 270 L 210 270 L 230 330 L 90 330 Z" fill="#21252B"/>
    <!-- Chest Street Art Graphic -->
    <text x="160" y="190" fill="#FF5252" font-family="Arial Black" font-size="20" font-weight="900" text-anchor="middle">OFF-LIMITS</text>
  </g>
</svg>
'@

# 5. Outdoor Hiking Boots
Save-Svg "hiking-boots.svg" @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs><radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#E2E7ED"/></radialGradient></defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <ellipse cx="300" cy="480" rx="190" ry="24" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g transform="translate(120, 150)">
    <!-- Sole Lug Rubber -->
    <path d="M 40 220 L 340 220 L 330 250 L 30 250 Z" fill="#212121"/>
    <!-- Deep Grip Ridges -->
    <rect x="50" y="245" width="20" height="15" fill="#FF9800"/>
    <rect x="90" y="245" width="20" height="15" fill="#FF9800"/>
    <rect x="130" y="245" width="20" height="15" fill="#FF9800"/>
    <rect x="170" y="245" width="20" height="15" fill="#FF9800"/>
    <!-- Suede Leather Boot Upper -->
    <path d="M 80 60 L 160 60 L 190 140 L 310 180 Q 340 200 320 220 L 40 220 L 40 120 Z" fill="#795548"/>
    <!-- Ankle Support Collar -->
    <rect x="80" y="60" width="80" height="30" rx="6" fill="#3E2723"/>
    <!-- Yellow Lacing D-Rings -->
    <circle cx="165" cy="110" r="5" fill="#FFC107"/>
    <circle cx="175" cy="130" r="5" fill="#FFC107"/>
    <circle cx="185" cy="150" r="5" fill="#FFC107"/>
  </g>
</svg>
'@

# 6. Smart Robot Vacuum
Save-Svg "robot-vacuum.svg" @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs><radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#E2E7ED"/></radialGradient></defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <ellipse cx="300" cy="460" rx="190" ry="24" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g transform="translate(150, 150)">
    <!-- Round Disc Body -->
    <circle cx="150" cy="150" r="140" fill="#263238" stroke="#455A64" stroke-width="4"/>
    <!-- Top LiDAR Laser Sensor Turret -->
    <circle cx="150" cy="100" r="40" fill="#102027" stroke="#FF5252" stroke-width="3"/>
    <circle cx="150" cy="100" r="18" fill="#FF1744"/>
    <!-- Bumper Strip Edge -->
    <path d="M 25 100 Q 150 -10 275 100" stroke="#FF9800" stroke-width="6" fill="none"/>
    <!-- Power & Home Buttons -->
    <circle cx="130" cy="220" r="14" fill="#37474F" stroke="#00E5FF"/>
    <circle cx="170" cy="220" r="14" fill="#37474F" stroke="#00E676"/>
  </g>
</svg>
'@

# 7. Tactical 45L Backpack
Save-Svg "tactical-backpack.svg" @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs><radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#E2E7ED"/></radialGradient></defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <ellipse cx="300" cy="510" rx="160" ry="22" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g transform="translate(160, 100)">
    <!-- Main Heavy Duty Backpack Body -->
    <rect x="20" y="20" width="240" height="370" rx="36" fill="#333D29" stroke="#414833" stroke-width="3"/>
    <!-- Front Compartment -->
    <rect x="45" y="140" width="190" height="220" rx="20" fill="#414833"/>
    <!-- MOLLE Webbing Straps -->
    <line x1="60" y1="180" x2="220" y2="180" stroke="#656D4A" stroke-width="6" stroke-dasharray="24 10"/>
    <line x1="60" y1="220" x2="220" y2="220" stroke="#656D4A" stroke-width="6" stroke-dasharray="24 10"/>
    <line x1="60" y1="260" x2="220" y2="260" stroke="#656D4A" stroke-width="6" stroke-dasharray="24 10"/>
    <line x1="60" y1="300" x2="220" y2="300" stroke="#656D4A" stroke-width="6" stroke-dasharray="24 10"/>
    <!-- Top Carry Handle -->
    <path d="M 90 20 Q 140 -15 190 20" stroke="#1B1F17" stroke-width="12" fill="none"/>
  </g>
</svg>
'@

# 8. OBD2 Bluetooth Scanner
Save-Svg "obd-scanner.svg" @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs><radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#E2E7ED"/></radialGradient></defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <ellipse cx="300" cy="480" rx="140" ry="22" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g transform="translate(180, 160)">
    <!-- OBD2 Blue Shell Body -->
    <rect x="0" y="60" width="240" height="180" rx="24" fill="#0D47A1" stroke="#1E88E5" stroke-width="3"/>
    <!-- 16-Pin Diagnostic Connector -->
    <rect x="40" y="20" width="160" height="45" rx="6" fill="#212121"/>
    <circle cx="60" cy="35" r="4" fill="#FFD54F"/><circle cx="80" cy="35" r="4" fill="#FFD54F"/><circle cx="100" cy="35" r="4" fill="#FFD54F"/><circle cx="120" cy="35" r="4" fill="#FFD54F"/><circle cx="140" cy="35" r="4" fill="#FFD54F"/><circle cx="160" cy="35" r="4" fill="#FFD54F"/><circle cx="180" cy="35" r="4" fill="#FFD54F"/>
    <circle cx="60" cy="50" r="4" fill="#FFD54F"/><circle cx="80" cy="50" r="4" fill="#FFD54F"/><circle cx="100" cy="50" r="4" fill="#FFD54F"/><circle cx="120" cy="50" r="4" fill="#FFD54F"/><circle cx="140" cy="50" r="4" fill="#FFD54F"/><circle cx="160" cy="50" r="4" fill="#FFD54F"/><circle cx="180" cy="50" r="4" fill="#FFD54F"/>
    <!-- Bluetooth Status LEDs -->
    <circle cx="60" cy="110" r="8" fill="#00E676"/>
    <circle cx="90" cy="110" r="8" fill="#FF1744"/>
    <circle cx="120" cy="110" r="8" fill="#00E5FF"/>
    <text x="120" y="170" fill="#FFF" font-family="Arial Black" font-size="24" font-weight="900" text-anchor="middle">OBD-II</text>
    <text x="120" y="200" fill="#90CAF9" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">BLUETOOTH 5.0</text>
  </g>
</svg>
'@

Write-Host "All 8 additional product SVGs created!"

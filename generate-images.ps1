# PowerShell script to generate dedicated, accurate commercial SVG product graphics
$ErrorActionPreference = 'Stop'

$destDir = Join-Path $PSScriptRoot "images\products"
if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }

function Save-Svg($filename, $svgContent) {
    $filePath = Join-Path $destDir $filename
    [System.IO.File]::WriteAllText($filePath, $svgContent, [System.Text.Encoding]::UTF8)
    Write-Host "Created: $filename"
}

# 1. Baseus 65W GaN Fast Charger
$ganSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F3F5F7"/><stop offset="100%" stop-color="#E1E6EB"/>
    </radialGradient>
    <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%"><feDropShadow dx="0" dy="18" stdDeviation="15" flood-color="#000" flood-opacity="0.18"/></filter>
    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#262A30"/><stop offset="100%" stop-color="#14171A"/></linearGradient>
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FF3838"/><stop offset="100%" stop-color="#E60000"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="url(#badgeGrad)"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#EEF2F6" stroke="#D0D7DE"/><text x="495" y="17" fill="#24292F" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">65W GaN5 Pro • 3 Ports</text></g>
  <ellipse cx="300" cy="480" rx="150" ry="20" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)">
    <!-- Main Charger Body -->
    <rect x="220" y="160" width="160" height="260" rx="24" fill="url(#bodyGrad)"/>
    <!-- Foldable Prongs Base -->
    <rect x="260" y="420" width="80" height="20" rx="4" fill="#0F1113"/>
    <rect x="275" y="435" width="12" height="30" rx="2" fill="#D0D7DE"/>
    <rect x="313" y="435" width="12" height="30" rx="2" fill="#D0D7DE"/>
    <!-- 65W Golden Logo -->
    <text x="300" y="225" fill="#FFC72C" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="34" text-anchor="middle">65W</text>
    <text x="300" y="248" fill="#8C939E" font-family="Arial" font-weight="700" font-size="12" letter-spacing="3" text-anchor="middle">GaN5 Pro</text>
    <line x1="250" y1="265" x2="350" y2="265" stroke="#373D45" stroke-width="2"/>
    <!-- Ports Faceplate -->
    <!-- Type-C 1 -->
    <rect x="265" y="285" width="70" height="24" rx="12" fill="#0A0C0E" stroke="#FFC72C" stroke-width="1.5"/>
    <rect x="275" y="293" width="50" height="8" rx="4" fill="#1C2127"/>
    <text x="300" y="322" fill="#8C939E" font-family="Arial" font-size="9" font-weight="700" text-anchor="middle">TYPE-C 1 (65W)</text>
    <!-- Type-C 2 -->
    <rect x="265" y="332" width="70" height="24" rx="12" fill="#0A0C0E" stroke="#48525D" stroke-width="1"/>
    <rect x="275" y="340" width="50" height="8" rx="4" fill="#1C2127"/>
    <text x="300" y="369" fill="#8C939E" font-family="Arial" font-size="9" font-weight="700" text-anchor="middle">TYPE-C 2</text>
    <!-- USB-A -->
    <rect x="262" y="378" width="76" height="22" rx="4" fill="#0A0C0E" stroke="#FF5722" stroke-width="1.5"/>
    <rect x="272" y="385" width="56" height="8" rx="1" fill="#FF5722"/>
    <text x="300" y="412" fill="#8C939E" font-family="Arial" font-size="9" font-weight="700" text-anchor="middle">USB-A (QC 3.0)</text>
  </g>
  <!-- Power Sparks -->
  <path d="M 170 280 L 195 295 L 185 315 L 210 325" stroke="#FFC72C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M 430 280 L 405 295 L 415 315 L 390 325" stroke="#FFC72C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>
'@
Save-Svg "gan-charger.svg" $ganSvg

# 2. Ajazz AK820 Pro Mechanical Keyboard
$kbSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F3F8"/><stop offset="100%" stop-color="#E0E3EB"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.2"/></filter>
    <linearGradient id="rgbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF007A"/><stop offset="30%" stop-color="#7B00FF"/><stop offset="70%" stop-color="#00F0FF"/><stop offset="100%" stop-color="#00FF88"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#EEF2F6" stroke="#D0D7DE"/><text x="495" y="17" fill="#24292F" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">75% Gasket • TFT Screen</text></g>
  <ellipse cx="300" cy="460" rx="220" ry="24" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <!-- Keyboard Chassis -->
  <g filter="url(#shadow)" transform="translate(70, 160)">
    <!-- Base Frame with RGB Underglow -->
    <rect x="-8" y="-8" width="476" height="266" rx="24" fill="url(#rgbGrad)" opacity="0.75" filter="blur(6px)"/>
    <rect x="0" y="0" width="460" height="250" rx="18" fill="#181B20" stroke="#2B303A" stroke-width="2"/>
    <!-- Rotary Metal Knob & TFT Screen -->
    <g transform="translate(370, 20)">
      <!-- TFT Screen -->
      <rect x="0" y="0" width="70" height="36" rx="6" fill="#0A0C0E" stroke="#3A404D"/>
      <text x="35" y="18" fill="#00F0FF" font-family="monospace" font-weight="bold" font-size="11" text-anchor="middle">98% 🔋</text>
      <text x="35" y="30" fill="#FF007A" font-family="monospace" font-size="9" text-anchor="middle">RGB: ON</text>
    </g>
    <!-- Metal Volume Knob -->
    <circle cx="340" cy="38" r="14" fill="#4B5260" stroke="#717B8D" stroke-width="2"/>
    <circle cx="340" cy="38" r="7" fill="#252A33"/>
    <!-- Keycaps Matrix -->
    <!-- Function Row -->
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="22" height="22" rx="4" fill="#FF5252"/><rect x="28" y="0" width="22" height="22" rx="4" fill="#2E3440"/><rect x="56" y="0" width="22" height="22" rx="4" fill="#2E3440"/><rect x="84" y="0" width="22" height="22" rx="4" fill="#2E3440"/><rect x="112" y="0" width="22" height="22" rx="4" fill="#2E3440"/><rect x="140" y="0" width="22" height="22" rx="4" fill="#4C566A"/><rect x="168" y="0" width="22" height="22" rx="4" fill="#4C566A"/><rect x="196" y="0" width="22" height="22" rx="4" fill="#4C566A"/><rect x="224" y="0" width="22" height="22" rx="4" fill="#4C566A"/><rect x="252" y="0" width="22" height="22" rx="4" fill="#2E3440"/><rect x="280" y="0" width="22" height="22" rx="4" fill="#FF5252"/>
    </g>
    <!-- Number Row -->
    <g transform="translate(20, 52)">
      <rect x="0" y="0" width="24" height="28" rx="4" fill="#3B4252"/><rect x="30" y="0" width="24" height="28" rx="4" fill="#E5E9F0"/><rect x="60" y="0" width="24" height="28" rx="4" fill="#E5E9F0"/><rect x="90" y="0" width="24" height="28" rx="4" fill="#E5E9F0"/><rect x="120" y="0" width="24" height="28" rx="4" fill="#E5E9F0"/><rect x="150" y="0" width="24" height="28" rx="4" fill="#E5E9F0"/><rect x="180" y="0" width="24" height="28" rx="4" fill="#E5E9F0"/><rect x="210" y="0" width="24" height="28" rx="4" fill="#E5E9F0"/><rect x="240" y="0" width="24" height="28" rx="4" fill="#E5E9F0"/><rect x="270" y="0" width="24" height="28" rx="4" fill="#E5E9F0"/><rect x="300" y="0" width="24" height="28" rx="4" fill="#E5E9F0"/><rect x="330" y="0" width="24" height="28" rx="4" fill="#E5E9F0"/><rect x="360" y="0" width="46" height="28" rx="4" fill="#88C0D0"/><rect x="414" y="0" width="26" height="28" rx="4" fill="#5E81AC"/>
    </g>
    <!-- QWERTY Row -->
    <g transform="translate(20, 88)">
      <rect x="0" y="0" width="38" height="28" rx="4" fill="#88C0D0"/><rect x="44" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="74" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="104" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="134" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="164" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="194" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="224" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="254" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="284" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="314" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="344" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="374" y="0" width="32" height="28" rx="4" fill="#88C0D0"/><rect x="414" y="0" width="26" height="28" rx="4" fill="#5E81AC"/>
    </g>
    <!-- ASDF Row -->
    <g transform="translate(20, 124)">
      <rect x="0" y="0" width="46" height="28" rx="4" fill="#88C0D0"/><rect x="52" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="82" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="112" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="142" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="172" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="202" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="232" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="262" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="292" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="322" y="0" width="24" height="28" rx="4" fill="#ECEFF4"/><rect x="352" y="0" width="54" height="28" rx="4" fill="#81A1C1"/><rect x="414" y="0" width="26" height="28" rx="4" fill="#5E81AC"/>
    </g>
    <!-- Bottom Spacebar Row -->
    <g transform="translate(20, 160)">
      <rect x="0" y="0" width="58" height="30" rx="4" fill="#5E81AC"/><rect x="64" y="0" width="24" height="30" rx="4" fill="#ECEFF4"/><rect x="94" y="0" width="24" height="30" rx="4" fill="#ECEFF4"/><rect x="124" y="0" width="24" height="30" rx="4" fill="#ECEFF4"/><rect x="154" y="0" width="24" height="30" rx="4" fill="#ECEFF4"/><rect x="184" y="0" width="24" height="30" rx="4" fill="#ECEFF4"/><rect x="214" y="0" width="24" height="30" rx="4" fill="#ECEFF4"/><rect x="244" y="0" width="24" height="30" rx="4" fill="#ECEFF4"/><rect x="274" y="0" width="24" height="30" rx="4" fill="#ECEFF4"/><rect x="304" y="0" width="24" height="30" rx="4" fill="#ECEFF4"/><rect x="334" y="0" width="50" height="30" rx="4" fill="#5E81AC"/><rect x="390" y="0" width="22" height="30" rx="4" fill="#FF5252"/>
    </g>
    <!-- Spacebar Bar -->
    <g transform="translate(130, 200)">
      <rect x="0" y="0" width="180" height="34" rx="6" fill="#88C0D0" stroke="#5E81AC"/>
    </g>
  </g>
</svg>
'@
Save-Svg "mechanical-keyboard.svg" $kbSvg

# 3. Baseus Magnetic Power Bank MagSafe
$pbSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F3F5F7"/><stop offset="100%" stop-color="#E2E7ED"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.18"/></filter>
    <linearGradient id="body" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3A3F47"/><stop offset="100%" stop-color="#1E2126"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(400, 30)"><rect width="170" height="26" rx="13" fill="#EEF2F6" stroke="#D0D7DE"/><text x="485" y="17" fill="#24292F" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">10000mAh • 20W MagSafe</text></g>
  <ellipse cx="300" cy="490" rx="140" ry="22" fill="#000" opacity="0.15" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(190, 130)">
    <!-- Main Power Bank Body -->
    <rect x="0" y="0" width="220" height="330" rx="34" fill="url(#body)"/>
    <!-- MagSafe Ring Indicator -->
    <circle cx="110" cy="150" r="65" fill="none" stroke="#6C7582" stroke-width="6" stroke-dasharray="14 8"/>
    <circle cx="110" cy="150" r="16" fill="none" stroke="#6C7582" stroke-width="4"/>
    <rect x="107" y="222" width="6" height="22" rx="3" fill="#6C7582"/>
    <!-- Wireless Charging Lightning Icon -->
    <path d="M 112 135 L 104 150 L 110 150 L 108 165 L 116 150 L 110 150 Z" fill="#00F0FF"/>
    <!-- LED Battery Display -->
    <rect x="70" y="270" width="80" height="30" rx="8" fill="#0D0F12" stroke="#2D333B"/>
    <text x="110" y="291" fill="#00FF88" font-family="monospace" font-weight="900" font-size="18" text-anchor="middle">100%</text>
    <!-- Brand -->
    <text x="110" y="42" fill="#8C939E" font-family="Arial" font-weight="900" font-size="13" letter-spacing="3" text-anchor="middle">BASEUS</text>
  </g>
</svg>
'@
Save-Svg "magsafe-powerbank.svg" $pbSvg

# 4. Carbon Fiber Phone Case
$caseSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F4F8"/><stop offset="100%" stop-color="#DFE4EC"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="15" flood-color="#000" flood-opacity="0.2"/></filter>
    <pattern id="carbon" width="12" height="12" patternUnits="userSpaceOnUse">
      <rect width="12" height="12" fill="#181B1F"/>
      <path d="M 0 0 L 6 6 L 12 0 L 6 12 Z" fill="#24282E" opacity="0.6"/>
      <line x1="0" y1="6" x2="12" y2="6" stroke="#101214" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#EEF2F6" stroke="#D0D7DE"/><text x="495" y="17" fill="#24292F" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">Carbon Fiber • MagSafe</text></g>
  <ellipse cx="300" cy="500" rx="130" ry="20" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(195, 110)">
    <!-- Case Edge Rim -->
    <rect x="0" y="0" width="210" height="380" rx="42" fill="#121417" stroke="#333940" stroke-width="2"/>
    <!-- Carbon Fiber Backplate -->
    <rect x="8" y="8" width="194" height="364" rx="36" fill="url(#carbon)"/>
    <!-- Camera Plateau -->
    <rect x="18" y="22" width="76" height="82" rx="18" fill="#0E1012" stroke="#252A30" stroke-width="2"/>
    <circle cx="42" cy="46" r="16" fill="#1C2026" stroke="#3D454F" stroke-width="2"/>
    <circle cx="42" cy="46" r="8" fill="#080A0D"/>
    <circle cx="70" cy="74" r="16" fill="#1C2026" stroke="#3D454F" stroke-width="2"/>
    <circle cx="70" cy="74" r="8" fill="#080A0D"/>
    <circle cx="70" cy="38" r="6" fill="#FFC107" opacity="0.8"/>
    <!-- Integrated MagSafe Ring -->
    <circle cx="105" cy="210" r="50" fill="none" stroke="#4F5864" stroke-width="4"/>
    <rect x="103" y="265" width="4" height="18" rx="2" fill="#4F5864"/>
  </g>
</svg>
'@
Save-Svg "phone-case.svg" $caseSvg

# 5. Men's Waterproof Outdoor Windbreaker Jacket
$jacketSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F5F8"/><stop offset="100%" stop-color="#E2E7ED"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.18"/></filter>
    <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#213242"/><stop offset="100%" stop-color="#141E28"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#EEF2F6" stroke="#D0D7DE"/><text x="495" y="17" fill="#24292F" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">Waterproof • Windproof</text></g>
  <ellipse cx="300" cy="510" rx="170" ry="24" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(140, 110)">
    <!-- Hood -->
    <path d="M 110 50 Q 160 10 210 50 L 195 100 Q 160 80 125 100 Z" fill="#1C2A38"/>
    <!-- Torso and Sleeves -->
    <!-- Left Sleeve -->
    <path d="M 80 80 L 10 260 L 60 280 L 105 130 Z" fill="url(#jacketGrad)"/>
    <!-- Right Sleeve -->
    <path d="M 240 80 L 310 260 L 260 280 L 215 130 Z" fill="url(#jacketGrad)"/>
    <!-- Body -->
    <path d="M 90 80 Q 160 90 230 80 L 250 350 L 70 350 Z" fill="url(#jacketGrad)"/>
    <!-- Water-repellent Neon Zipper -->
    <line x1="160" y1="85" x2="160" y2="350" stroke="#FF5722" stroke-width="5"/>
    <!-- Chest Zippered Pocket -->
    <line x1="180" y1="140" x2="220" y2="155" stroke="#FF5722" stroke-width="3"/>
    <!-- Water Droplets Beading Effect -->
    <circle cx="120" cy="180" r="4" fill="#00F0FF" opacity="0.8"/>
    <circle cx="130" cy="195" r="5" fill="#00F0FF" opacity="0.9"/>
    <circle cx="195" cy="220" r="4" fill="#00F0FF" opacity="0.8"/>
    <circle cx="140" cy="270" r="6" fill="#00F0FF" opacity="0.9"/>
  </g>
</svg>
'@
Save-Svg "windbreaker-jacket.svg" $jacketSvg

# 6. Women's Vintage Knit Cardigan Sweater
$cardiganSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#FAF7F2"/><stop offset="100%" stop-color="#EDE6DC"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.14"/></filter>
    <linearGradient id="knit" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#EADDCB"/><stop offset="100%" stop-color="#D6C4AD"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#F4EFE6" stroke="#D3C7B5"/><text x="495" y="17" fill="#6A5741" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">Chunky Knit • Vintage</text></g>
  <ellipse cx="300" cy="510" rx="180" ry="24" fill="#000" opacity="0.1" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(130, 110)">
    <!-- Cardigan Body & Dropped Shoulders -->
    <path d="M 60 70 L 10 270 L 60 280 L 95 120 L 100 360 L 240 360 L 245 120 L 280 280 L 330 270 L 280 70 Q 170 85 60 70 Z" fill="url(#knit)"/>
    <!-- Deep V-Neck Collar -->
    <path d="M 120 75 L 170 210 L 220 75" stroke="#B8A389" stroke-width="8" stroke-linecap="round" fill="none"/>
    <!-- Tortoise / Horn Wood Buttons -->
    <circle cx="170" cy="225" r="9" fill="#5D4037" stroke="#3E2723" stroke-width="2"/>
    <circle cx="170" cy="265" r="9" fill="#5D4037" stroke="#3E2723" stroke-width="2"/>
    <circle cx="170" cy="305" r="9" fill="#5D4037" stroke="#3E2723" stroke-width="2"/>
    <!-- Knit Cable Texture Lines -->
    <line x1="125" y1="210" x2="125" y2="340" stroke="#CBB9A0" stroke-width="2" stroke-dasharray="6 4"/>
    <line x1="215" y1="210" x2="215" y2="340" stroke="#CBB9A0" stroke-width="2" stroke-dasharray="6 4"/>
  </g>
</svg>
'@
Save-Svg "knit-cardigan.svg" $cardiganSvg

# 7. Running Sneakers
$sneakersSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F4F7"/><stop offset="100%" stop-color="#DFE4EA"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.18"/></filter>
    <linearGradient id="shoeRed" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF3838"/><stop offset="100%" stop-color="#C40000"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#EEF2F6" stroke="#D0D7DE"/><text x="495" y="17" fill="#24292F" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">Air Mesh • Ultra-Light</text></g>
  <ellipse cx="300" cy="460" rx="200" ry="24" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(90, 180)">
    <!-- Aerodynamic Running Shoe Profile -->
    <!-- Outsole Cushion Foam -->
    <path d="M 30 200 Q 180 180 340 190 Q 400 170 410 145 Q 420 180 390 220 Q 220 235 30 220 Z" fill="#FFFFFF" stroke="#D0D7DE" stroke-width="2"/>
    <path d="M 50 220 L 380 220 L 370 230 L 40 230 Z" fill="#181B20"/>
    <!-- Shoe Upper Air Mesh Fabric -->
    <path d="M 50 200 Q 80 110 170 110 L 220 150 Q 290 120 380 170 Q 400 185 360 195 Q 200 185 50 200 Z" fill="url(#shoeRed)"/>
    <!-- White Swoosh / Motion Stripe -->
    <path d="M 120 160 Q 230 140 290 185 Q 210 180 130 185 Z" fill="#FFFFFF"/>
    <!-- Mesh Ventilation Pattern dots -->
    <circle cx="280" cy="160" r="3" fill="#990000"/>
    <circle cx="300" cy="165" r="3" fill="#990000"/>
    <circle cx="320" cy="170" r="3" fill="#990000"/>
    <!-- Laces and Tongue -->
    <line x1="170" y1="120" x2="220" y2="150" stroke="#FFFFFF" stroke-width="4"/>
    <line x1="185" y1="130" x2="235" y2="160" stroke="#FFFFFF" stroke-width="4"/>
  </g>
</svg>
'@
Save-Svg "running-sneakers.svg" $sneakersSvg

# 8. Cloud Slides Sandals
$slidesSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#FAF8F2"/><stop offset="100%" stop-color="#ECE5D8"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.14"/></filter>
    <linearGradient id="eva" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F3E5AB"/><stop offset="100%" stop-color="#DEC383"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#FAF2DF" stroke="#DBC59A"/><text x="495" y="17" fill="#755B27" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">4cm Thick Sole • Ergonomic</text></g>
  <ellipse cx="300" cy="460" rx="180" ry="24" fill="#000" opacity="0.12" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(130, 180)">
    <!-- Thick Pillow EVA Sole -->
    <path d="M 20 180 Q 80 150 200 160 Q 320 140 340 180 Q 345 220 300 230 Q 150 240 20 220 Z" fill="url(#eva)"/>
    <!-- Deep Heel Cup and Arch Cushion -->
    <ellipse cx="90" cy="180" rx="45" ry="16" fill="#D2B572" opacity="0.5"/>
    <!-- Wide Ergonomic Strap -->
    <path d="M 120 165 Q 210 60 280 160 Q 230 185 150 185 Z" fill="url(#eva)" stroke="#C7A65E" stroke-width="2"/>
    <text x="210" y="150" fill="#8A7036" font-family="Arial" font-weight="bold" font-size="14" letter-spacing="2">COMFORT</text>
  </g>
</svg>
'@
Save-Svg "cloud-slides.svg" $slidesSvg

# 9. Pagani Design Automatic Mechanical Watch
$watchSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F4F8"/><stop offset="100%" stop-color="#DCE2EC"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#000" flood-opacity="0.22"/></filter>
    <linearGradient id="steel" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#E2E7ED"/><stop offset="50%" stop-color="#BDC5D0"/><stop offset="100%" stop-color="#8E99A8"/></linearGradient>
    <linearGradient id="blueDial" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0B2B5C"/><stop offset="100%" stop-color="#04122B"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#EEF2F6" stroke="#D0D7DE"/><text x="495" y="17" fill="#24292F" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">Automatic • Sapphire 100M</text></g>
  <ellipse cx="300" cy="520" rx="140" ry="20" fill="#000" opacity="0.15" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(180, 80)">
    <!-- Solid Steel Bracelet Links Top & Bottom -->
    <rect x="75" y="0" width="90" height="120" fill="url(#steel)" rx="4"/>
    <rect x="75" y="320" width="90" height="120" fill="url(#steel)" rx="4"/>
    <!-- Watch Case Lugs -->
    <rect x="55" y="90" width="130" height="260" rx="28" fill="url(#steel)"/>
    <!-- Screw-down Security Crown -->
    <rect x="225" y="205" width="18" height="30" rx="4" fill="#717D8D"/>
    <!-- Unidirectional Ceramic Bezel -->
    <circle cx="120" cy="220" r="105" fill="#0A182F" stroke="#BDC5D0" stroke-width="4"/>
    <circle cx="120" cy="220" r="95" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="2 12"/>
    <!-- Sunburst Blue Dial -->
    <circle cx="120" cy="220" r="85" fill="url(#blueDial)"/>
    <!-- Luminous Hour Markers -->
    <circle cx="120" cy="148" r="7" fill="#E2F700"/>
    <circle cx="120" cy="292" r="7" fill="#E2F700"/>
    <circle cx="48" cy="220" r="7" fill="#E2F700"/>
    <rect x="180" y="213" width="16" height="14" rx="2" fill="#FFFFFF"/>
    <text x="188" y="224" fill="#000" font-family="Arial" font-size="9" font-weight="bold" text-anchor="middle">28</text>
    <!-- Brand -->
    <text x="120" y="180" fill="#FFF" font-family="Arial" font-size="10" font-weight="900" letter-spacing="1" text-anchor="middle">PAGANI DESIGN</text>
    <text x="120" y="195" fill="#8AB4F8" font-family="Arial" font-size="8" text-anchor="middle">AUTOMATIC</text>
    <!-- Watch Hands -->
    <line x1="120" y1="220" x2="90" y2="190" stroke="#FFF" stroke-width="5" stroke-linecap="round"/>
    <line x1="120" y1="220" x2="160" y2="170" stroke="#FFF" stroke-width="4" stroke-linecap="round"/>
    <line x1="120" y1="220" x2="110" y2="280" stroke="#FF5252" stroke-width="2" stroke-linecap="round"/>
    <circle cx="120" cy="220" r="5" fill="#E2E7ED"/>
  </g>
</svg>
'@
Save-Svg "pagani-watch.svg" $watchSvg

# 10. Smartwatch (Colmi P71 HD Voice Calling)
$smartwatchSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F4F8"/><stop offset="100%" stop-color="#DFE4EC"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="15" flood-color="#000" flood-opacity="0.2"/></filter>
    <linearGradient id="strap" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2D3238"/><stop offset="100%" stop-color="#181B1E"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#EEF2F6" stroke="#D0D7DE"/><text x="495" y="17" fill="#24292F" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">1.9" HD Screen • BT Calling</text></g>
  <ellipse cx="300" cy="520" rx="140" ry="20" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(190, 80)">
    <!-- Silicone Straps -->
    <rect x="40" y="0" width="140" height="120" rx="12" fill="url(#strap)"/>
    <rect x="40" y="320" width="140" height="120" rx="12" fill="url(#strap)"/>
    <!-- Smartwatch Metallic Body -->
    <rect x="15" y="100" width="190" height="240" rx="36" fill="#1C1F24" stroke="#3A404A" stroke-width="3"/>
    <!-- Side Button / Rotary Crown -->
    <rect x="207" y="180" width="12" height="40" rx="4" fill="#586170"/>
    <!-- AMOLED Color Display Area -->
    <rect x="28" y="113" width="164" height="214" rx="26" fill="#050709"/>
    <!-- Watch Face Digital UI -->
    <text x="110" y="175" fill="#FFFFFF" font-family="Arial Black, Impact" font-weight="900" font-size="44" text-anchor="middle">10:42</text>
    <text x="110" y="200" fill="#00F0FF" font-family="Arial" font-weight="bold" font-size="13" text-anchor="middle">WED, NOV 02</text>
    <!-- Heart Rate & Steps Stats -->
    <g transform="translate(45, 225)">
      <circle cx="15" cy="15" r="14" fill="#FF1744" opacity="0.2"/>
      <text x="15" y="20" fill="#FF1744" font-family="Arial" font-size="14" text-anchor="middle">❤️</text>
      <text x="35" y="20" fill="#FFF" font-family="Arial" font-weight="bold" font-size="13">78 bpm</text>
    </g>
    <g transform="translate(45, 265)">
      <circle cx="15" cy="15" r="14" fill="#00E676" opacity="0.2"/>
      <text x="15" y="20" fill="#00E676" font-family="Arial" font-size="14" text-anchor="middle">👟</text>
      <text x="35" y="20" fill="#FFF" font-family="Arial" font-weight="bold" font-size="13">8,420 steps</text>
    </g>
  </g>
</svg>
'@
Save-Svg "smartwatch.svg" $smartwatchSvg

# 11. Flame Aroma Diffuser
$diffuserSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F5F3EF"/><stop offset="100%" stop-color="#E2DCD2"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#000" flood-opacity="0.2"/></filter>
    <linearGradient id="flame" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#FF3D00"/><stop offset="50%" stop-color="#FF9100"/><stop offset="100%" stop-color="#FFEA00"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#F8EEDB" stroke="#DBC39C"/><text x="495" y="17" fill="#75501C" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">Flame Light • Ultrasonic</text></g>
  <ellipse cx="300" cy="490" rx="180" ry="24" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <!-- Diffuser Body -->
  <g filter="url(#shadow)" transform="translate(160, 240)">
    <!-- Base Shell -->
    <rect x="0" y="80" width="280" height="150" rx="24" fill="#1E2024" stroke="#33373E" stroke-width="2"/>
    <!-- Power Button & LED line -->
    <circle cx="140" cy="165" r="14" fill="#2E333B" stroke="#FF9100" stroke-width="2"/>
    <circle cx="140" cy="165" r="5" fill="#FF9100"/>
    <!-- Top Diffuser Slot with Realistic Rising Mist Flames -->
    <rect x="25" y="65" width="230" height="20" rx="10" fill="#0C0E10"/>
    <!-- Flame Plumes -->
    <path d="M 50 65 Q 60 10 75 -20 Q 90 20 100 65 Z" fill="url(#flame)" opacity="0.85"/>
    <path d="M 90 65 Q 110 -10 130 -50 Q 150 10 160 65 Z" fill="url(#flame)" opacity="0.95"/>
    <path d="M 150 65 Q 170 0 190 -40 Q 210 20 220 65 Z" fill="url(#flame)" opacity="0.9"/>
  </g>
</svg>
'@
Save-Svg "flame-diffuser.svg" $diffuserSvg

# 12. 14-in-1 Vegetable Chopper
$chopperSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F7F4"/><stop offset="100%" stop-color="#D8E8DC"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="15" flood-color="#000" flood-opacity="0.16"/></filter>
    <linearGradient id="containerGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#E8F5E9" stop-opacity="0.8"/><stop offset="100%" stop-color="#C8E6C9" stop-opacity="0.5"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#E8F5E9" stroke="#A5D6A7"/><text x="495" y="17" fill="#1B5E20" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">14-in-1 Mandoline • 420 Steel</text></g>
  <ellipse cx="300" cy="490" rx="180" ry="24" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(130, 160)">
    <!-- Clear Catch Container Box -->
    <rect x="40" y="140" width="260" height="150" rx="16" fill="url(#containerGrad)" stroke="#81C784" stroke-width="2"/>
    <!-- Cut Diced Veggies Inside (Carrot, Cucumber) -->
    <rect x="60" y="240" width="14" height="14" fill="#FF7043" rx="2"/>
    <rect x="80" y="235" width="14" height="14" fill="#66BB6A" rx="2"/>
    <rect x="100" y="250" width="14" height="14" fill="#FFCA28" rx="2"/>
    <rect x="120" y="240" width="14" height="14" fill="#FF7043" rx="2"/>
    <rect x="140" y="255" width="14" height="14" fill="#66BB6A" rx="2"/>
    <rect x="170" y="245" width="14" height="14" fill="#FFCA28" rx="2"/>
    <!-- Green Chopper Base Lid -->
    <rect x="20" y="110" width="300" height="35" rx="8" fill="#2E7D32"/>
    <!-- Stainless Steel Cutting Grid Insert -->
    <rect x="110" y="80" width="120" height="35" rx="4" fill="#E0E0E0" stroke="#9E9E9E"/>
    <line x1="130" y1="80" x2="130" y2="115" stroke="#757575"/>
    <line x1="150" y1="80" x2="150" y2="115" stroke="#757575"/>
    <line x1="170" y1="80" x2="170" y2="115" stroke="#757575"/>
    <line x1="190" y1="80" x2="190" y2="115" stroke="#757575"/>
    <line x1="210" y1="80" x2="210" y2="115" stroke="#757575"/>
    <!-- Press Arm Handle (Angled up ready to chop) -->
    <g transform="translate(20, 110) rotate(-25)">
      <rect x="0" y="-30" width="280" height="35" rx="12" fill="#43A047" stroke="#1B5E20" stroke-width="2"/>
      <rect x="20" y="-18" width="80" height="12" rx="4" fill="#81C784"/>
    </g>
  </g>
</svg>
'@
Save-Svg "veggie-chopper.svg" $chopperSvg

# 13. High-Speed Ionic Hair Dryer
$dryerSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F5F3F7"/><stop offset="100%" stop-color="#E5E1EC"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="15" flood-color="#000" flood-opacity="0.18"/></filter>
    <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4A4E69"/><stop offset="100%" stop-color="#22223B"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#F3E5F5" stroke="#CE93D8"/><text x="495" y="17" fill="#6A1B9A" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">110,000 RPM • 200M Ions</text></g>
  <ellipse cx="300" cy="510" rx="150" ry="22" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(180, 130)">
    <!-- Hair Dryer Barrel Cylinder -->
    <rect x="0" y="30" width="180" height="95" rx="47" fill="url(#metal)"/>
    <!-- Magnetic Air Styling Nozzle -->
    <path d="M 0 45 L -35 55 L -35 100 L 0 110 Z" fill="#1A1C23"/>
    <!-- LED Glow Ring on Back (Temperature indicator) -->
    <circle cx="165" cy="77" r="36" fill="none" stroke="#FF4081" stroke-width="8"/>
    <circle cx="165" cy="77" r="28" fill="#121318"/>
    <!-- Ergonomic Long Handle -->
    <rect x="80" y="120" width="45" height="240" rx="22" fill="url(#metal)"/>
    <!-- Control Buttons on Handle -->
    <circle cx="102" cy="160" r="9" fill="#1A1C23" stroke="#9A8C98"/>
    <rect x="94" y="195" width="16" height="30" rx="8" fill="#1A1C23" stroke="#9A8C98"/>
    <!-- High Speed Air Streams -->
    <path d="M -50 65 L -110 50" stroke="#00E5FF" stroke-width="3" stroke-linecap="round"/>
    <path d="M -55 77 L -130 77" stroke="#00E5FF" stroke-width="4" stroke-linecap="round"/>
    <path d="M -50 90 L -110 105" stroke="#00E5FF" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>
'@
Save-Svg "hair-dryer.svg" $dryerSvg

# 14. 4K Drone
$droneSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F0F4F8"/><stop offset="100%" stop-color="#D6E0EA"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.2"/></filter>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#E1F5FE" stroke="#81D4FA"/><text x="495" y="17" fill="#01579B" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">4K Dual Camera • GPS</text></g>
  <ellipse cx="300" cy="480" rx="190" ry="24" fill="#000" opacity="0.15" filter="blur(8px)"/>
  <!-- Drone Body and 4 Rotors -->
  <g filter="url(#shadow)" transform="translate(140, 150)">
    <!-- Rotor Arms -->
    <line x1="80" y1="80" x2="240" y2="240" stroke="#37474F" stroke-width="16" stroke-linecap="round"/>
    <line x1="240" y1="80" x2="80" y2="240" stroke="#37474F" stroke-width="16" stroke-linecap="round"/>
    <!-- Propeller Discs -->
    <ellipse cx="70" cy="70" rx="60" ry="12" fill="#90A4AE" opacity="0.6"/>
    <ellipse cx="250" cy="70" rx="60" ry="12" fill="#90A4AE" opacity="0.6"/>
    <ellipse cx="70" cy="250" rx="60" ry="12" fill="#90A4AE" opacity="0.6"/>
    <ellipse cx="250" cy="250" rx="60" ry="12" fill="#90A4AE" opacity="0.6"/>
    <!-- Central Aerodynamic Fuselage -->
    <ellipse cx="160" cy="160" rx="55" ry="85" fill="#263238" stroke="#455A64" stroke-width="3"/>
    <ellipse cx="160" cy="140" rx="35" ry="45" fill="#37474F"/>
    <!-- Power Button & Battery LED -->
    <circle cx="160" cy="155" r="7" fill="#00E676"/>
    <!-- 4K Front Gimbal Camera -->
    <rect x="145" y="65" width="30" height="25" rx="6" fill="#000" stroke="#00E5FF"/>
    <circle cx="160" cy="77" r="8" fill="#1A237E" stroke="#00E5FF" stroke-width="1.5"/>
  </g>
</svg>
'@
Save-Svg "gps-drone.svg" $droneSvg

# 15. R36S Retro Handheld Gaming Console
$retroSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F3F7"/><stop offset="100%" stop-color="#DDE1EA"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="15" flood-color="#000" flood-opacity="0.2"/></filter>
    <linearGradient id="bodyPurple" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4A148C"/><stop offset="100%" stop-color="#1A0033"/></linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#EDE7F6" stroke="#B39DDB"/><text x="495" y="17" fill="#4A148C" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">15,000+ Games • Dual Sticks</text></g>
  <ellipse cx="300" cy="510" rx="140" ry="22" fill="#000" opacity="0.15" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(185, 100)">
    <!-- Translucent Purple Body Shell -->
    <rect x="0" y="0" width="230" height="370" rx="34" fill="url(#bodyPurple)" stroke="#7B1FA2" stroke-width="2"/>
    <!-- 3.5-inch IPS OCA Screen Glass -->
    <rect x="20" y="25" width="190" height="150" rx="10" fill="#050505" stroke="#311B92"/>
    <!-- Nostalgic Game Demo Graphic on Screen -->
    <rect x="30" y="35" width="170" height="130" rx="6" fill="#1A237E"/>
    <text x="115" y="95" fill="#FFEB3B" font-family="Arial Black" font-weight="900" font-size="20" text-anchor="middle">RETRO</text>
    <text x="115" y="125" fill="#00E5FF" font-family="monospace" font-weight="bold" font-size="13" text-anchor="middle">PRESS START</text>
    <!-- D-Pad (Left) -->
    <g transform="translate(35, 205)">
      <rect x="18" y="0" width="16" height="52" rx="4" fill="#212121"/>
      <rect x="0" y="18" width="52" height="16" rx="4" fill="#212121"/>
      <circle cx="26" cy="26" r="6" fill="#111"/>
    </g>
    <!-- Action Buttons (Right: X, Y, A, B) -->
    <g transform="translate(150, 200)">
      <circle cx="20" cy="8" r="9" fill="#00E5FF"/><text x="20" y="12" fill="#000" font-family="Arial" font-size="9" font-weight="900" text-anchor="middle">X</text>
      <circle cx="4" cy="24" r="9" fill="#FFEB3B"/><text x="4" y="28" fill="#000" font-family="Arial" font-size="9" font-weight="900" text-anchor="middle">Y</text>
      <circle cx="36" cy="24" r="9" fill="#FF1744"/><text x="36" y="28" fill="#FFF" font-family="Arial" font-size="9" font-weight="900" text-anchor="middle">A</text>
      <circle cx="20" cy="40" r="9" fill="#00E676"/><text x="20" y="44" fill="#000" font-family="Arial" font-size="9" font-weight="900" text-anchor="middle">B</text>
    </g>
    <!-- Dual 3D Analog Hall Joysticks -->
    <circle cx="65" cy="305" r="22" fill="#263238" stroke="#37474F" stroke-width="2"/>
    <circle cx="65" cy="305" r="14" fill="#102027"/>
    <circle cx="165" cy="305" r="22" fill="#263238" stroke="#37474F" stroke-width="2"/>
    <circle cx="165" cy="305" r="14" fill="#102027"/>
  </g>
</svg>
'@
Save-Svg "r36s-console.svg" $retroSvg

# 16. 4K Dual Car Dashcam
$dashcamSvg = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="80%" stop-color="#F2F4F7"/><stop offset="100%" stop-color="#DCE2EC"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#000" flood-opacity="0.2"/></filter>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <g transform="translate(30, 30)"><rect width="90" height="26" rx="4" fill="#E60000"/><text x="45" y="18" fill="#FFF" font-family="Arial" font-weight="900" font-size="13" text-anchor="middle">Choice</text></g>
  <g transform="translate(420, 30)"><rect width="150" height="26" rx="13" fill="#ECEFF1" stroke="#CFD8DC"/><text x="495" y="17" fill="#263238" font-family="Arial" font-weight="700" font-size="11" text-anchor="middle">4K Ultra HD • Night Vision</text></g>
  <ellipse cx="300" cy="480" rx="160" ry="22" fill="#000" opacity="0.14" filter="blur(8px)"/>
  <g filter="url(#shadow)" transform="translate(150, 150)">
    <!-- Windshield Suction Mount -->
    <path d="M 120 0 L 180 0 L 165 40 L 135 40 Z" fill="#212121"/>
    <rect x="140" y="35" width="20" height="30" fill="#424242"/>
    <!-- Dashcam Body -->
    <rect x="0" y="60" width="300" height="170" rx="20" fill="#1E232A" stroke="#374151" stroke-width="2"/>
    <!-- 4K Large Camera Barrel -->
    <circle cx="100" cy="145" r="55" fill="#111827" stroke="#9CA3AF" stroke-width="3"/>
    <circle cx="100" cy="145" r="42" fill="#1E3A8A" stroke="#00F0FF" stroke-width="2"/>
    <circle cx="100" cy="145" r="24" fill="#030712"/>
    <circle cx="90" cy="135" r="8" fill="#FFF" opacity="0.8"/>
    <!-- Screen / Back Display -->
    <rect x="175" y="85" width="105" height="120" rx="8" fill="#0A0F1D" stroke="#1F2937"/>
    <text x="227" y="125" fill="#EF4444" font-family="Arial" font-weight="bold" font-size="12" text-anchor="middle">● REC [4K]</text>
    <text x="227" y="150" fill="#E5E7EB" font-family="monospace" font-size="14" text-anchor="middle">00:14:28</text>
    <text x="227" y="175" fill="#10B981" font-family="Arial" font-size="10" text-anchor="middle">GPS: 64 KM/H</text>
  </g>
</svg>
'@
Save-Svg "dashcam.svg" $dashcamSvg

Write-Host "All authentic product SVG graphics generated successfully!"

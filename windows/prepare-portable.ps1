$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$windowsDir = $PSScriptRoot
$outputDir = Join-Path $root "dist\\windows-portable"
$appDir = Join-Path $outputDir "app"

if (Test-Path $outputDir) {
  Remove-Item $outputDir -Recurse -Force
}

New-Item -ItemType Directory -Path $appDir -Force | Out-Null
New-Item -ItemType Directory -Path (Join-Path $appDir "icons") -Force | Out-Null

$files = @(
  "index.html",
  "styles.css",
  "game.js",
  "sw.js",
  "manifest.webmanifest",
  "app-meta.json"
)

foreach ($file in $files) {
  Copy-Item (Join-Path $root $file) (Join-Path $appDir $file) -Force
}

Copy-Item (Join-Path $root "icons\\*") (Join-Path $appDir "icons") -Recurse -Force
Copy-Item (Join-Path $windowsDir "FlappyKidsLauncher.bat") $outputDir -Force
Copy-Item (Join-Path $windowsDir "Serve-FlappyKids.ps1") $outputDir -Force
Copy-Item (Join-Path $windowsDir "README-Windows.txt") $outputDir -Force

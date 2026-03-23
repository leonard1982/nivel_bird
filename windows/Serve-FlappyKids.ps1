$ErrorActionPreference = "Stop"

$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$appDir = Join-Path $baseDir "app"
$pidFile = Join-Path $baseDir "server.pid"
$portFile = Join-Path $baseDir "server.port"

if (-not (Test-Path $appDir)) {
  exit 1
}

function Get-FreePort {
  param(
    [int[]]$Candidates = @(8765, 8766, 8767, 8768, 8769, 8770)
  )

  foreach ($candidate in $Candidates) {
    try {
      $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $candidate)
      $listener.Start()
      $listener.Stop()
      return $candidate
    } catch {
    }
  }

  return 8765
}

function Get-ContentType {
  param([string]$Path)

  switch ([System.IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    ".html" { "text/html; charset=utf-8" }
    ".css" { "text/css; charset=utf-8" }
    ".js" { "application/javascript; charset=utf-8" }
    ".json" { "application/json; charset=utf-8" }
    ".png" { "image/png" }
    ".jpg" { "image/jpeg" }
    ".jpeg" { "image/jpeg" }
    ".svg" { "image/svg+xml" }
    ".webmanifest" { "application/manifest+json; charset=utf-8" }
    default { "application/octet-stream" }
  }
}

$port = Get-FreePort
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://127.0.0.1:$port/")
$listener.Start()

[System.IO.File]::WriteAllText($pidFile, [string]$PID)
[System.IO.File]::WriteAllText($portFile, [string]$port)

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $requestPath = $context.Request.Url.AbsolutePath.TrimStart("/")
    if ([string]::IsNullOrWhiteSpace($requestPath)) {
      $requestPath = "index.html"
    }

    $targetPath = Join-Path $appDir $requestPath
    $resolvedPath = [System.IO.Path]::GetFullPath($targetPath)
    $resolvedRoot = [System.IO.Path]::GetFullPath($appDir)

    if (-not $resolvedPath.StartsWith($resolvedRoot)) {
      $context.Response.StatusCode = 403
      $context.Response.Close()
      continue
    }

    if (-not (Test-Path $resolvedPath)) {
      $resolvedPath = Join-Path $appDir "index.html"
    }

    $bytes = [System.IO.File]::ReadAllBytes($resolvedPath)
    $context.Response.ContentType = Get-ContentType -Path $resolvedPath
    $context.Response.ContentLength64 = $bytes.Length
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $context.Response.OutputStream.Close()
  }
} finally {
  if ($listener.IsListening) {
    $listener.Stop()
  }
  Remove-Item $pidFile -ErrorAction SilentlyContinue
  Remove-Item $portFile -ErrorAction SilentlyContinue
}

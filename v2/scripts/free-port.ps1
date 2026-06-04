param([int]$Port = 3000)

$connections = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
if (-not $connections) {
  Write-Host "Port $Port is free."
  exit 0
}

$connections | ForEach-Object {
  $processId = $_.OwningProcess
  Write-Host "Stopping process $processId on port $Port..."
  Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
}

Start-Sleep -Seconds 1
Write-Host "Port $Port cleared."

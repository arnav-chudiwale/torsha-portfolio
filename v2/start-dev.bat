@echo off
cd /d "%~dp0"
title Terrain Portfolio - Dev Server

echo.
echo  ========================================
echo   TERRAIN v2 - Torsha Goswami Portfolio
echo  ========================================
echo.
echo  USE THIS URL (not port 3000):
echo  http://localhost:3001/#top
echo.

if not exist "node_modules\" (
  echo  Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo  npm install failed. Install Node.js from https://nodejs.org
    pause
    exit /b 1
  )
)

echo  Checking port 3001...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\free-port.ps1" -Port 3001

if exist ".next\" (
  echo  Clearing stale build cache...
  rmdir /s /q ".next"
)

echo.
echo  Starting v2 at http://localhost:3001
echo  Keep this window OPEN while viewing the site.
echo.

start "" cmd /c "ping 127.0.0.1 -n 8 >nul && start http://localhost:3001/#top"

call npm run dev

echo.
echo  Server stopped.
pause

@echo off
cd /d "%~dp0"
title Terrain Portfolio - Dev Server

echo.
echo  ========================================
echo   TERRAIN - Torsha Goswami Portfolio
echo  ========================================
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

echo  Checking port 3000...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\free-port.ps1" -Port 3000

echo.
echo  Starting server at http://localhost:3000
echo  Keep this window OPEN while viewing the site.
echo.

start "" cmd /c "ping 127.0.0.1 -n 8 >nul && start http://localhost:3000/#top"

call npm run dev

echo.
echo  Server stopped.
pause

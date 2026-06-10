@echo off
cd /d "%~dp0"
title npm run dev

echo Checking for live server on port 9002...

:: Check if port 9002 is active in netstat
netstat -ano | findstr :9002 >nul 2>&1

if %errorlevel% equ 0 (
    echo [FOUND] A live server is running on port 9002. Cleaning it up...
    for /f "tokens=5" %%a in ('netstat -aon ^| findstr :9002') do (
        taskkill /f /pid %%a >nul 2>&1
    )
    echo [SUCCESS] Port 9002 has been cleared.
) else (
    echo [CLEAN] Port 9002 is already free. No ghost processes found.
)

echo.
echo Starting development server...
cmd /k npm run dev
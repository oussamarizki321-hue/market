@echo off
title AliExpress Affiliate Marketplace Server
echo ============================================================
echo   STARTING ALIEXPRESS AFFILIATE MARKETPLACE SERVER
echo ============================================================
echo.
echo Launching local HTTP web server on port 3000...
echo Opening http://localhost:3000/index.html in your browser...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause

@echo off
setlocal

set "BASE_DIR=%~dp0"
set "SERVER_SCRIPT=%BASE_DIR%Serve-FlappyKids.ps1"
set "PID_FILE=%BASE_DIR%server.pid"
set "PORT_FILE=%BASE_DIR%server.port"

if not exist "%PID_FILE%" (
  powershell -ExecutionPolicy Bypass -WindowStyle Hidden -File "%SERVER_SCRIPT%"
  timeout /t 2 >nul
)

if not exist "%PORT_FILE%" (
  echo No se pudo iniciar Flappy Kids.
  pause
  exit /b 1
)

set /p PORT=<"%PORT_FILE%"
set "GAME_URL=http://127.0.0.1:%PORT%/index.html"

if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" --app="%GAME_URL%"
) else if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" --app="%GAME_URL%"
) else (
  start "" "%GAME_URL%"
)

endlocal

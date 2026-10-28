@echo off
title Devansh Goyal - Neo-Brutalist Cyber Portfolio
echo ========================================================
echo   DEVANSH GOYAL // KINETIC CYBER BRUTALISM PORTFOLIO
echo   DFIR & EDR SPECIALIST // NEO-BRUTALIST EDITION
echo ========================================================
echo.
echo Launching local server at http://localhost:5174 ...
echo Press Ctrl+C in this terminal when you want to stop.
echo.
start http://localhost:5174
npx vite --host 0.0.0.0 --port 5174
pause

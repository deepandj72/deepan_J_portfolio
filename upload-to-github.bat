@echo off
echo ============================================================
echo   DEEPAN J - UPLOADING PORTFOLIO TO GITHUB
echo   Target: https://github.com/deepandj72/deepan_J_portfolio
echo ============================================================
echo.

set "GIT_CMD=%LOCALAPPDATA%\MinGit\cmd\git.exe"
if not exist "%GIT_CMD%" (
    set "GIT_CMD=git"
)

echo Please paste your GitHub Personal Access Token below:
set /p "GH_TOKEN=GitHub Token: "

if "%GH_TOKEN%"=="" (
    echo.
    echo No token entered. Attempting default push...
    "%GIT_CMD%" push -u origin main
) else (
    echo.
    echo Uploading to https://github.com/deepandj72/deepan_J_portfolio...
    "%GIT_CMD%" push "https://%GH_TOKEN%@github.com/deepandj72/deepan_J_portfolio.git" main
)

echo.
if %ERRORLEVEL% EQU 0 (
    echo ============================================================
    echo   SUCCESS! Your portfolio code is now live on GitHub:
    echo   https://github.com/deepandj72/deepan_J_portfolio
    echo ============================================================
) else (
    echo.
    echo Upload failed. Please verify that your token has 'repo' permissions.
)

pause

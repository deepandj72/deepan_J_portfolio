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

echo Checking Git status...
"%GIT_CMD%" status

echo.
echo Pushing main branch to GitHub...
echo (If prompted, sign in via browser or paste your Personal Access Token)
echo.
"%GIT_CMD%" push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ============================================================
    echo   SUCCESS! Your portfolio code is now live on GitHub:
    echo   https://github.com/deepandj72/deepan_J_portfolio
    echo ============================================================
) else (
    echo.
    echo If GitHub authentication failed:
    echo 1. Generate a token at: https://github.com/settings/tokens
    echo 2. Run: "%GIT_CMD%" push https://^<YOUR_TOKEN^>@github.com/deepandj72/deepan_J_portfolio.git main
)

pause

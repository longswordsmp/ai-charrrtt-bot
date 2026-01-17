@echo off
setlocal

:: Configuration
set "BOT_DIR=%~dp0"
set "TIMESTAMP=%date:~10,4%-%date:~4,2%-%date:~7,2% %time:~0,2%:%time:~3,2%:%time:~6,2%"
set "TIMESTAMP=%TIMESTAMP: =0%"

echo [DEPLOY] Starting bot deployment process...
cd /d "%BOT_DIR%"

:: Check for changes
git status --porcelain > nul
if %errorlevel% neq 0 (
    echo [DEPLOY] Changes detected, committing...
    git add .
    git commit -m "Auto-deploy: %TIMESTAMP%"
    
    echo [DEPLOY] Pushing to GitHub...
    git push origin main
    
    if %errorlevel% equ 0 (
        echo [SUCCESS] Bot code pushed to GitHub successfully!
        echo [INFO] Railway should automatically detect the change and redeploy if connected.
    ) else (
        echo [ERROR] Failed to push to GitHub. Please check your credentials.
        pause
        exit /b 1
    )
) else (
    echo [INFO] No changes detected in the bot directory.
    echo [INFO] Pushing anyway to ensure remote is up to date...
    git push origin main
)

echo.
echo [DONE] Deployment script finished.
pause

@echo off
title Git Auto Updater - Diva's Project

:: Set color to green for the header
color 0A
echo ========================================
echo        GIT AUTO UPDATE STARTED
echo ========================================

:: Switch to bright white for Git status
color 0F
echo [1] Checking Git Status...
git status
echo.

:: Yellow for adding changes
color 0E
echo [2] Adding all changes to Git...
git add .
echo.

:: Cyan for commit
color 0B
echo [3] Committing your changes...
set /p msg=Enter your commit message: 
git commit -m "%msg%"
echo.

:: Blue for pushing
color 09
echo [4] Pushing to GitHub...
git push origin main
echo.

:: Green for success
color 0A
echo ========================================
echo     ✅ GIT UPDATE COMPLETE
echo ========================================
pause

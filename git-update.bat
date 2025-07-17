@echo off
title 🚀 Git Auto Updater - Diva's Project
color 0A

echo ========================================
echo 💻 Git Auto Update Script Started...
echo ========================================

:: Show Git Status
echo 🔍 Checking Git Status...
git status
echo.

:: Stage all changes
echo ➕ Adding all changes...
git add .
echo.

:: Commit with message
set /p msg=📝 Enter commit message: 
git commit -m "%msg%"
echo.

:: Push to GitHub
echo 🚀 Pushing to GitHub...
git push origin main
echo.

echo ✅ All done! Your project is updated on GitHub.
pause

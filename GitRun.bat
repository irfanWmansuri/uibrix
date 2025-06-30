@echo off
set /p commitMsg=Enter your commit message: 
pul
echo Adding changes...
git add .

echo Committing changes...
git commit -m "%commitMsg%"

echo Pulling latest changes...
git pull

echo Pushing to remote...
git push

echo Done ✅
pause


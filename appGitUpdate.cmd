set msg=%1
if %msg% EQU "" Set Msg="first Commit"
git add .
git commit -m %msg%
echo %msg%
rem git remote add origin https://github.com/ipaulmagu/testexpress2.git
rem git push -u origin master
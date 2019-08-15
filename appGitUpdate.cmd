rem echo off

if %1% EQU "" Set Msg="first Commit"
if %1% NEQ "" Set Msg=%1%
git add .
git commit -m %msg%
echo Message: %msg%
rem git remote add origin https://github.com/ipaulmagu/testexpress2.git
rem git push -u origin master
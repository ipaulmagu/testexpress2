param($msg="nth Commit (def msg)")
git add .
git commit -m $msg
git remote add origin https://github.com/ipaulmagu/testexpress2.git
git push -u origin master
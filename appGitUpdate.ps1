param($msg="nth Commit (def msg)")
git add .
git commit -m $msg
git push -u origin master
MESSAGE=$1
str="'$*'"

git add -A
git commit -m "$str"
git push
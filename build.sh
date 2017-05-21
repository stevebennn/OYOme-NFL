# this is just a test script
git checkout master

ng build --prod --aot

rm -r ../OYOme-NFL_prod/*

cp -rf dist/ ../OYOme-NFL_Prod/

cd ../OYOme-NFL_prod/

git add -A

git commit -m 'updates. pushing to master'

git push

ssh root@107.170.79.219


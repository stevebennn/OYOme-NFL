# this is just a test script
cd ../Documents/OYOme-NFL

ng build --prod --aot

cp -rf dist/ ../OYOme-NFL_Prod/

git add -A

git commit -m 'updates. pushing to master'

git push

ECHO "okay...pushed it real good"

ssh root@107.170.79.219

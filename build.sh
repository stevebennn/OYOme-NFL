
# switch to master branch if not already on it
git checkout master

# pull down latest changes
git pull

# run angular cli build command w/ AOT compilation
ng build --prod --aot

# clear out production directory
rm -r ../OYOme-NFL_prod/*

# copy newly created production files from the dist/ directory
cp -rf dist/ ../OYOme-NFL_Prod/

# move position to the production directory
cd ../OYOme-NFL_prod/

# add all updated files
git add -A

# commit the newly added/updated files
git commit -m 'updates. pushing to master'

# push changes the the product master branch
git push

# ssh into the prod server
ssh root@107.170.79.219


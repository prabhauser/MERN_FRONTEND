#!/bin/bash
echo "Deployment started"

echo "Please enter environment (dev/ qa/ client-qa/uat) : "

read env

echo "Please enter Web Build Tag : "

read web_build_tag

# switch to the master branch
git checkout master

# pull latest code of master branch
git pull

git checkout $web_build_tag

# pull latest code of master branch
git submodule update --recursive --remote --merge 

# install dependencies and create
npm install

# the react app build
npm run build:$env

# delete everything on the build directory
rm -rf ../../../build/client/$env/

# copy release notes latest version
cp ./releases/version.txt ./build/

# copy the build folder content to the repository root
cp -r ./build/ ../../../build/client/$env/


read -p  "Deployment done, press any key to close"
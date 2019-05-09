#!/bin/bash

dir=$1
name=$2

cd /tmp
mkdir -p $dir
cd $dir
echo "git clone https://github.com/NicolasSchwarzer/web-console-boilerplate.git ..."
git clone https://github.com/NicolasSchwarzer/web-console-boilerplate.git $name
cd $name
echo "install dependencies..."
npm config set registry https://registry.npm.taobao.org/
npm i
echo "build project..."
npm run build
echo "done"

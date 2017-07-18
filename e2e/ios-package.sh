#!/usr/bin/env bash

mkdir -p ios/assets
rm -rf ios/assets/*

mkdir -p ios/assets/src/containers/skill-tree/www
mkdir -p ios/assets/src/containers/practises/algorithm/algorithm-webview
mkdir -p ios/assets/src/containers/practises/moregex/www
mkdir -p ios/assets/src/components/GrEditor

cp -a src/containers/skill-tree/www ios/assets/src/containers/skill-tree/
cp -a src/containers/practises/algorithm/algorithm-webview ios/assets/src/containers/practises/algorithm/
cp -a src/containers/practises/moregex/www ios/assets/src/containers/practises/moregex/
cp -a src/components/GrEditor ios/assets/src/components/

react-native run-ios --configuration Release


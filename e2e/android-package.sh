#!/usr/bin/env bash

rm -rf android/app/src/main/assets/skilltree
rm -rf android/app/src/main/assets/algorithm-webview
rm -rf android/app/src/main/assets/moregex
rm -rf android/app/src/main/assets/GrEditor

cp -a src/containers/skill-tree/www android/app/src/main/assets/skilltree
cp -a src/containers/practises/algorithm/algorithm-webview android/app/src/main/assets/algorithm-webview
cp -a src/containers/practises/moregex/www android/app/src/main/assets/moregex
cp -a src/components/GrEditor android/app/src/main/assets/GrEditor

cd android && ./gradlew assembleRelease


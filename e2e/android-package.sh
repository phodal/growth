#!/usr/bin/env bash

cp -a src/containers/skill-tree/www android/app/src/main/assets/skilltree
cp -a src/containers/practises/algorithm/algorithm-webview android/app/src/main/assets/algorithm-webview
cp -a src/containers/practises/moregex/www android/app/src/main/assets/moregex
cp -a src/components/GrEditor android/app/src/main/assets/GrEditor

cd android && ./gradlew assembleRelease


#!/usr/bin/env bash

echo 'Build iOS Test Package'

react-native run-ios --configuration Release

echo 'Build Android Test Package'

cd android && ./gradlew assembleRelease


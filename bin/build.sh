#!/bin/bash

pushd app
npx rollup src/lib/editor.js -f iife -o src/public/bundle.js -p @rollup/plugin-node-resolve
popd
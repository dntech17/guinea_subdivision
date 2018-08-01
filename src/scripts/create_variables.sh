#!/bin/bash
set -o errexit

echo "Reading minified files...."
region=$(cat src/data/min/regions.min.json)
prefecture=$(cat src/data/min/prefectures.min.json)
sprefecture=$(cat src/data/min/sousprefectures.min.json)

echo "Updating variables in index.js..."

sed -i.bak -e "s|let regions = .*|let regions = ${region}|g" src/index.js
sed -i.bak -e "s|let prefectures = .*|let prefectures = ${prefecture}|g" src/index.js
sed -i.bak -e "s|let sousprefectures = .*|let sousprefectures = ${sprefecture}|g" src/index.js

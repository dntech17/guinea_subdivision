#!/bin/bash

set -o nounset
set -o errexit

echo "minification...."
json-minify src/data/src/regions.json > src/data/min/regions.min.json
json-minify src/data/src/prefectures.json > src/data/min/prefectures.min.json
json-minify src/data/src/sousprefectures.json > src/data/min/sousprefectures.min.json

echo "lecture des fichier....."
region=$(cat src/data/min/regions.min.json)
prefecture=`cat src/data/min/prefectures.min.json`
sprefecture=`cat src/data/min/sousprefectures.min.json`

echo "Affectation des variables..."
sed -i -e 's|let|var|' 'src/index.js'

#&& sed -i "s/variablePrefecture/$prefecture/" src/index.js && 
#sed -i "s/variablesprefecture/$sprefecture/" src/index.js

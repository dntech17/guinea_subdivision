#!/bin/bash

set -o nounset
set -o errexit

json-minify src/data/src/regions.json >> src/data/min/regions.min.json
json-minify src/data/src/prefectures.json >> src/data/min/prefectures.min.json
json-minify src/data/src/sousprefectures.json >> src/data/min/sousprefectures.min.json

region=`cat src/data/min/regions.min.json`
prefecture=`cat src/data/min/prefectures.min.json`
sprefecture=`cat src/data/min/sousprefectures.min.json`

sed -i "s/variableRegion/$region/" src/index.js && 
sed -i "s/variablePrefecture/$prefecture/" src/index.js && 
sed -i "s/variablesprefecture/$sprefecture/" src/index.js

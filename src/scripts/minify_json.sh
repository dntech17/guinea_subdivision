#!/bin/bash

echo "minifying files...."
json-minify src/data/src/regions.json > src/data/min/regions.min.json
json-minify src/data/src/prefectures.json > src/data/min/prefectures.min.json
json-minify src/data/src/sousprefectures.json > src/data/min/sousprefectures.min.json
# guinea-subdivision

This package give you all guinea administrative subdivision.
by regions, prefectures, sous-prefectures. 

## Installation

With yarn:
```shell
$ yarn add guinea-subdivision --save
```

With npm:
```shell
$ npm i guinea-subdivision --save
```

##### Functions:
here are all the functions, that you can import and use
some of them return and array and some of them retourn a json object

| Function                                       |  Explaination                                          | Return Type  |
| -----------------------------------------------|------------------------------------------------------  |--------------|
| `getRegionsAndCodes()`                         | return all regions and their codes                     |   Json       |
| `getRegions()`                                 | return the list of the regions (names only)            |   Array      |
| `getRegionsCodes()`                            | return the regions codes only                          |   Array      |
| `getRegionNameByCode()`                        | you give it a region code and it return you the name   |   String     |
| `getRegionCodeByName()`                        | you give it a region name and it return you the code   |   String     |
| -----------------------                        |      --------------------------------------------      |  -------     |
| `getPrefecturesAndCodes()`                     | return all prefectures and their codes                 |   Json       |
| `getPrefecturesCodes()`                        | return the prefecutres codes only                      |   Array      |
| `getPrefectures()`                             | return the list of the prefecutres                     |   Json       |
| `getPrefecturesAndCodesByRegionCode()`         | return all prefectures and thier code by it region code|   Json       |
| `getPrefecturesByRegionCode()`                 | return all prefectures by it region code               |   Array      |
| `getPrefecturesByRegionName()`                 | return all prefectures by it region name               |   Array      |
| `getPrefectureNameByCode()`                    | you give it a prefecture code and it give you the name |   String     |
| `getPrefectureCodeByName()`                    | you give it a prefecture anme and it give you the code |   String     |
| ------------------------                       |       -----------------------------------------        |   -------    |
| `getSousprefecturesAndCodes()`                 | return all sousprefectures and their codes             |   Json       |
| `getSousprefecturesCodes()`                    | return all sousprefectures codes                       |   Array      |
| `getSousprefectures()`                         | return all sousprefectures codes                       |   Array      |
| `getSousprefecturesAndCodesByPrefectureCode()` | it return all sous prefectures and their codes based on a given prefecture code |json|
| `getSousprefecturesAndCodesByPrefectureName()` |it return all sous prefectures and their codes based on a given prefecture name|   Json       |
| `getSousprefecturesByPrefectureCode()`         | it return all sous prefectures based on a given prefecture code| Array |
| `getSousprefecturesByPrefectureName()`         | it return all sous prefectures based on a given prefecture name| Array |
| `getSousprefectureNameByCode()`                | you give it a sousprefecture code and it give you the name |   String  |
| `getSousprefectureCodeByName()`                | you give it a sousprefecture name and it give you the code |   String  |
------------------------------------------------------------------------------------------------------------------------------

## Usage 
If you have successfully installed this package and you're ready to use it,
first import the functions you need based on the top table like this:
```js
import { getRegions, getPrefecturesCodes, getSousprefecturesByPrefectureCode } from 'guinea-subdivision';

// then call them like
console.log(getRegions())
console.log(getPrefecturesCodes())
console.log(getSousprefecturesByPrefectureCode(getPrefecturesCodes()[3]))

```

## Developpers Section

If you wan to help improving this package, or you want to fix a bug founded bug or anything else like documentation, etc.. <br/>
You are welcome, we hope that you will make this package very usefull to some other people. then go ahead an make a PR. <br/>

#### The code
The code is writen in ES6 (es2015) and compiled with babel, packaged (minified) under webpack 4 (see package.json file) <br/>
- First of all, you need to install dependancies (including devDepenancies)
- go to src/index.js, this is where all the logic function are
- go to src/data/ to update the subdivision data

#### Building
If you have done a changes and you want to build, just run the following command

##### Test build
To build a test version (not minified) run the following command

`
npm run dev
`
##### Prod build
To build a minified version for production use, run the following command

`
npm run prod
`
##### A bug on UMD (Universal Module Definition)
[A Tuto can be found here ](http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6)

After a build including the UMD extension, i notice that there is a bug on compiled version located at './dist/index.js'
the variable `global` on a dev build (Line 10) or a prod build (Line 3) that variable should be replace by `this` reserved word.

```js
// this is a dev build
// replace this line
})(global, function() {

// by the following
})(this, function() {
```

Then go ahead and make your PR

**Data source:**<br>
[www.stat-guinee.org](http://www.stat-guinee.org/index.php/82-guinee/92-listes-des-sous-prefectures)<br/>
[guinee-decouverte.com](http://guinee-decouverte.com/2010/05/02/les-prefectures-et-sous-prefectures-de-guinee/)<br/>
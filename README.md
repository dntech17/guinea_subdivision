# guinea-subdivision

Dans le but de répondre aux besoins sans cesse croissants de l'ensemble des utilisateurs des subdivison sur la Guinée, ce package est mis à la disposition des développeurs souhaitant, recupérer des données de subdivision de la Guinée en type d'Objet où en Array, pour d'éventuel utilisation quelque soit le contexte d'utilisation.

## Installation

Avec yarn:
```shell
$ yarn add guinea-subdivision
```

Avec npm:
```shell
$ npm i -g guinea-subdivision
$ npm i --save guinea-subdivision
```

Utilisation:
```js
// Pour recupérer toutes les prefectures de la Guinée(retour en array).
const {getPrefectures} = require('guinea-subdivision')
console.log(getPrefectures)

// Pour recupérer toutes les sous prefectures de la Guinée(return en array).
const {getSousprefectures} = require('guinea-subdivision')
console.log(getSousprefectures)

// Pour recuperer toutes les régions de la Guinée(retour en array).
const {getRegions} = require('guinea-subdivision')
console.log(getRegions)

// Pour recuperer toutes les communes de la Guinée(retour en array).
const {getCommunes} = require('guinea-subdivision')
console.log(getCommunes)

// Pour recuperer tous les quartier de la Guinée(retour en array).
const {getQuartiers} = require('guinea-subdivision')
console.log(getQuartiers)

// Pour recuperer toutes les sous prefectures liées à une prefecture.
const {getSousprefecturesByPrefecture} = require('guinea-subdivision')
console.log(getSousprefecturesByPrefecture('Boffa')) // La fonction attend un paramètre(le nom de la prefecture)

// Pour recuperer tous les quartiers liées à une commune.
const {getQuartiersByCommune} = require('guinea-subdivision')
console.log(getQuartiersByCommune('Kaloum')) // La fonction attend un paramètre(le nom de la prefecture)

// vous pouvez toutes les combinées comme suit.
const {getPrefectures, getRegions, getSousprefectures, getSousprefecturesByPrefecture, getQuartiers, getCommunes} = require('guinea-subdivision')
```

**Site de réference:**<br>
[http://www.stat-guinee.org/](http://www.stat-guinee.org/).
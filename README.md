# guinee-statistiques

Dans le but de répondre aux besoins sans cesse croissants de l'ensemble des utilisateurs des subdivison sur la Guinée, ce package est mis à la disposition des développeurs souhaitant, recupérer des données de subdivision de la Guinée en type d'Objet où en Array, pour d'éventuel utilisation quelque soit le contexte de l'utilisation.

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
const {prefectures} = require('guinee-subdivision');
console.log(prefectures)

// Pour recupérer toutes les sous prefectures de la Guinée(return en array).
const {sousPrefectures} = require('guinee-subdivision');
console.log(sousPrefectures)

// Pour recuperer toutes les régions de la Guinée(retour en array).
const {regions} = require('guinee-subdivision');
console.log(regions)

// Pour recuperer toutes les sous prefectures liées à une prefecture.
const {prefectureSousPrefectures} = require('guinee-subdivision');
console.log(prefectureSousPrefectures('Boffa')) // La fonction attend un paramètre(le nom de la prefecture)

// vous pouvez toutes les combinées comme suit.
var {prefectures, regions, souPrefectures, prefectureSousPrefectures} = require('guinee-subdivision');
```

**Site de réference:**<br>
[http://www.stat-guinee.org/](http://www.stat-guinee.org/).
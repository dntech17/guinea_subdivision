# guinee-statistiques

Dans le but de répondre aux besoins sans cesse croissants de l'ensemble des utilisateurs des statistiques sur la Guinée, ce package est mis à la disposition des développeurs souhaitant, recupérer des données des statistiques de la Guinée en type d'Objet où en Array, pour d'eventuel utilisation quelque soit le contexte de l'utilisation.

## Installation

Avec yarn:
```shell
$ yarn add guinee-statistiques
```

Avec npm:
```shell
$ npm i -g guinee-statistiques
$ npm i --save guinee-statistiques
```

Utilisation:
```js
// Pour recupérer toutes les prefectures de la Guinée(retour en array).
const {prefectures} = require('guinee-statistiques');
console.log(prefectures)

// Pour recupérer toutes les sous prefectures de la Guinée(return en array).
const {sousPrefectures} = require('guinee-statistiques');
console.log(sousPrefectures)

// Pour recuperer toutes les régions de la Guinée(retour en array).
const {regions} = require('guinee-statistique');
console.log(regions)

// Pour recuperer toutes les sous prefectures liées à une prefecture.
const {prefectureSousPrefectures} = require('guinee-statistiques');
console.log(prefectureSousPrefectures('Boffa')) // La fonction attend un paramètre(le nom de la prefecture)

// vous pouvez toutes les combinées comme suit.
var {prefectures, regions, souPrefectures, prefectureSousPrefectures} = require('guinee-statistiques');
```

**Site de réference:**<br>
[http://www.stat-guinee.org/](http://www.stat-guinee.org/).
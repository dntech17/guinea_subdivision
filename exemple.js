const {getPrefectures, getQuartiers, getSousprefectures, getRegions, getCommunes, getSousprefecturesByPrefecture, getQuartiersByCommune} = require('./')

var r = getQuartiersByCommune('matoto')
console.log(r)
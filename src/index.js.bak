import {sortBy, uniq} from 'lodash'

// import fs from 'fs'
// import path from 'path'

// const regionsPath = path.join(process.cwd(), 'data', 'regions.json')
// const prefecturespath = path.join(process.cwd(), 'data', 'prefectures.json')
// const sousprefecturespath = path.join(process.cwd(), 'data', 'sousprefectures.json')


let regions = [{"code":"GN-C","region":"Conakry"},{"code":"GN-L","region":"Labé"},{"code":"GN-K","region":"Kankan"},{"code":"GN-F","region":"Faranah"},{"code":"GN-M","region":"Mamou"},{"code":"GN-D","region":"Kindia"},{"code":"GN-B","region":"Boké"},{"code":"GN-N","region":"N'Zérékoré"}]
let prefectures = [{"comment":"-----------les prefectures de conakry------------","regionCode":"GN-C","prefectureCode":"CONA","prefecture":"Conakry"},{"regionCode":"GN-L","prefectureCode":"KOUB","prefecture":"Koubia"},{"regionCode":"GN-L","prefectureCode":"LABE","prefecture":"Labé"},{"regionCode":"GN-L","prefectureCode":"LELO","prefecture":"Lélouma"},{"regionCode":"GN-L","prefectureCode":"MALI","prefecture":"Mali"},{"regionCode":"GN-L","prefectureCode":"TOUG","prefecture":"Tougué"},{"comment":"--------- les prefectures de kankan -----------","regionCode":"GN-K","prefectureCode":"KANK","prefecture":"Kankan"},{"regionCode":"GN-K","prefectureCode":"KERO","prefecture":"Kérouane"},{"regionCode":"GN-K","prefectureCode":"KOUR","prefecture":"Kouroussa"},{"regionCode":"GN-K","prefectureCode":"MAND","prefecture":"Mandiana"},{"regionCode":"GN-K","prefectureCode":"SIGU","prefecture":"Siguiri"},{"comment":"-------- les prefectures de faranah --------------","regionCode":"GN-F","prefectureCode":"DABO","prefecture":"Dabola"},{"regionCode":"GN-F","prefectureCode":"DING","prefecture":"Dinguiraye"},{"regionCode":"GN-F","prefectureCode":"FARA","prefecture":"Faranah"},{"regionCode":"GN-F","prefectureCode":"KISS","prefecture":"Kissidougou"},{"comment":"-------------- les prefectures de mamou ------------------","regionCode":"GN-M","prefectureCode":"MAMO","prefecture":"Mamou"},{"regionCode":"GN-M","prefectureCode":"DALA","prefecture":"Dalaba"},{"regionCode":"GN-M","prefectureCode":"PITA","prefecture":"Pita"},{"comment":"------------- les prefectures de kindia ----------","regionCode":"GN-D","prefectureCode":"COYA","prefecture":"Coyah"},{"regionCode":"GN-D","prefectureCode":"DUBR","prefecture":"Dubréka"},{"regionCode":"GN-D","prefectureCode":"FORE","prefecture":"Forécariah"},{"regionCode":"GN-D","prefectureCode":"KIND","prefecture":"Kindia"},{"regionCode":"GN-D","prefectureCode":"TELI","prefecture":"Télimélé"},{"comment":"------------------- les prefectures de boke ------------------","regionCode":"GN-B","prefectureCode":"BOFF","prefecture":"Boffa"},{"regionCode":"GN-B","prefectureCode":"BOKE","prefecture":"Boké"},{"regionCode":"GN-B","prefectureCode":"GAOU","prefecture":"Gaoual"},{"regionCode":"GN-B","prefectureCode":"KOUN","prefecture":"Koundara"},{"regionCode":"GN-B","prefectureCode":"FRIA","prefecture":"Fria"},{"comment":"------------- les prefectures de n'zerekore ----------","regionCode":"GN-N","prefectureCode":"BEYL","prefecture":"Beyla"},{"regionCode":"GN-N","prefectureCode":"GUEC","prefecture":"Guéckédou"},{"regionCode":"GN-N","prefectureCode":"LOLA","prefecture":"Lola"},{"regionCode":"GN-N","prefectureCode":"MACE","prefecture":"Macenta"},{"regionCode":"GN-N","prefectureCode":"NZER","prefecture":"Nzérékoré"},{"regionCode":"GN-N","prefectureCode":"YOMO","prefecture":"Yomou"}]
let sousprefectures = [{"comment":" --------------- conakry ---------------","prefectureCode":"CONA","sousprefectureCode":"MATO","sousprefecture":"Matoto"},{"prefectureCode":"CONA","sousprefectureCode":"RATO","sousprefecture":"Ratoma"},{"prefectureCode":"CONA","sousprefectureCode":"KALO","sousprefecture":"Kaloum"},{"prefectureCode":"CONA","sousprefectureCode":"DIXI","sousprefecture":"Dixinn"},{"prefectureCode":"CONA","sousprefectureCode":"MATA","sousprefecture":"Matam"},{"comment":" --------------- koubia ---------------","prefectureCode":"KOUB","sousprefectureCode":"FAFA","sousprefecture":"Fafaya"},{"prefectureCode":"KOUB","sousprefectureCode":"GADH","sousprefecture":"Gadha Woundou"},{"prefectureCode":"KOUB","sousprefectureCode":"KOUBC","sousprefecture":"Koubia centre"},{"prefectureCode":"KOUB","sousprefectureCode":"MATA","sousprefecture":"Matakaou"},{"prefectureCode":"KOUB","sousprefectureCode":"MISS","sousprefecture":"Missira"},{"prefectureCode":"KOUB","sousprefectureCode":"PILI","sousprefecture":"Pilimini"},{"comment":" --------------- Labe ---------------","prefectureCode":"LABE","sousprefectureCode":"LABE","sousprefecture":"Labé Centre"},{"prefectureCode":"LABE","sousprefectureCode":"DALE","sousprefecture":"Dalein"},{"prefectureCode":"LABE","sousprefectureCode":"DARA","sousprefecture":"Daralabé"},{"prefectureCode":"LABE","sousprefectureCode":"DIAR","sousprefecture":"Diari"},{"prefectureCode":"LABE","sousprefectureCode":"DION","sousprefecture":"Dionfo"},{"prefectureCode":"LABE","sousprefectureCode":"GARA","sousprefecture":"Garambé"},{"prefectureCode":"LABE","sousprefectureCode":"HAFI","sousprefecture":"Hafia"},{"prefectureCode":"LABE","sousprefectureCode":"NOUS","sousprefecture":"Noussy"},{"prefectureCode":"LABE","sousprefectureCode":"POPO","sousprefecture":"Popodara"},{"prefectureCode":"LABE","sousprefectureCode":"SANN","sousprefecture":"Sannou"},{"prefectureCode":"LABE","sousprefectureCode":"TOUN","sousprefecture":"Tountouroun"},{"prefectureCode":"LABE","sousprefectureCode":"KALA","sousprefecture":"Kalan"},{"prefectureCode":"LABE","sousprefectureCode":"KOUR","sousprefecture":"Kouramangui"},{"comment":" --------------- Kankan ---------------","prefectureCode":"KANK","sousprefectureCode":"KANK","sousprefecture":"Kankan Centre"},{"prefectureCode":"KANK","sousprefectureCode":"BALA","sousprefecture":"Balandougou"},{"prefectureCode":"KANK","sousprefectureCode":"BARA","sousprefecture":"Baranama"},{"prefectureCode":"KANK","sousprefectureCode":"BATE","sousprefecture":"Batè-Nafadji"},{"prefectureCode":"KANK","sousprefectureCode":"BOUL","sousprefecture":"Boula"},{"prefectureCode":"KANK","sousprefectureCode":"GBEN","sousprefecture":"Gbendou-Baranama"},{"prefectureCode":"KANK","sousprefectureCode":"KARF","sousprefecture":"Karfamorya"},{"prefectureCode":"KANK","sousprefectureCode":"KOUM","sousprefecture":"Koumban"},{"prefectureCode":"KANK","sousprefectureCode":"NAMO","sousprefecture":"Mamouroudou"},{"prefectureCode":"KANK","sousprefectureCode":"MISS","sousprefecture":"Missamana"},{"prefectureCode":"KANK","sousprefectureCode":"MORI","sousprefecture":"Moribaya"},{"prefectureCode":"KANK","sousprefectureCode":"TINT","sousprefecture":"Tintioulen"},{"prefectureCode":"KANK","sousprefectureCode":"TOKO","sousprefecture":"Tokounou"},{"comment":" --------------- Faranah ---------------","prefectureCode":"FARA","sousprefectureCode":"FARA","sousprefecture":"Faranah Centre"},{"prefectureCode":"FARA","sousprefectureCode":"BANI","sousprefecture":"Banian"},{"prefectureCode":"FARA","sousprefectureCode":"BIND","sousprefecture":"Bindougou"},{"prefectureCode":"FARA","sousprefectureCode":"HERE","sousprefecture":"Hèrmakono"},{"prefectureCode":"FARA","sousprefectureCode":"KOBI","sousprefecture":"Kobikoro"},{"prefectureCode":"FARA","sousprefectureCode":"MARE","sousprefecture":"Maréla"},{"prefectureCode":"FARA","sousprefectureCode":"NIAL","sousprefecture":"Nialia"},{"prefectureCode":"FARA","sousprefectureCode":"PASS","sousprefecture":"Passaya"},{"prefectureCode":"FARA","sousprefectureCode":"SAND","sousprefecture":"Sandénia"},{"prefectureCode":"FARA","sousprefectureCode":"SANG","sousprefecture":"Songoya"},{"prefectureCode":"FARA","sousprefectureCode":"TIRO","sousprefecture":"Tiro"},{"prefectureCode":"FARA","sousprefectureCode":"TIND","sousprefecture":"Tindo"},{"prefectureCode":"KISS","sousprefectureCode":"ALB","sousprefecture":"Albadariah"},{"prefectureCode":"KISS","sousprefectureCode":"YOM","sousprefecture":"Yombiro"},{"prefectureCode":"KISS","sousprefectureCode":"YEN","sousprefecture":"Yende-Millimou"},{"prefectureCode":"KISS","sousprefectureCode":"SAN","sousprefecture":"Sangardo"},{"prefectureCode":"KISS","sousprefectureCode":"MAN","sousprefecture":"Manfran"},{"prefectureCode":"KISS","sousprefectureCode":"KOUN","sousprefecture":"Koundiatou"},{"prefectureCode":"KISS","sousprefectureCode":"KIS","sousprefecture":"kissidougou Centre"},{"prefectureCode":"KISS","sousprefectureCode":"GBAN","sousprefecture":"Gbangbadou"},{"prefectureCode":"KISS","sousprefectureCode":"BANA","sousprefecture":"Banama"},{"prefectureCode":"KISS","sousprefectureCode":"BAR","sousprefecture":"Bardou"},{"prefectureCode":"KISS","sousprefectureCode":"BEIN","sousprefecture":"Beindou"},{"prefectureCode":"KISS","sousprefectureCode":"FER","sousprefecture":"Fermesadou"},{"prefectureCode":"KISS","sousprefectureCode":"FIRA","sousprefecture":"Firawa (Yomadou)"},{"prefectureCode":"KERO","sousprefectureCode":"BAN","sousprefecture":"Banankoro"},{"prefectureCode":"KERO","sousprefectureCode":"SORO","sousprefecture":"Soromaya"},{"prefectureCode":"KERO","sousprefectureCode":"SIBI","sousprefecture":"Sibiribaro"},{"prefectureCode":"KERO","sousprefectureCode":"LINK","sousprefecture":"Linko"},{"prefectureCode":"KERO","sousprefectureCode":"KOUN","sousprefecture":"Kounsankoro"},{"prefectureCode":"KERO","sousprefectureCode":"KOMO","sousprefecture":"Komodou"},{"prefectureCode":"KERO","sousprefectureCode":"KEROC","sousprefecture":"Kereouane centre"},{"prefectureCode":"KERO","sousprefectureCode":"DAMA","sousprefecture":"Damaro"},{"prefectureCode":"KOUR","sousprefectureCode":"BAB","sousprefecture":"Babila"},{"prefectureCode":"KOUR","sousprefectureCode":"BAL","sousprefecture":"Balato"},{"prefectureCode":"KOUR","sousprefectureCode":"BAN","sousprefecture":"Banfele"},{"prefectureCode":"KOUR","sousprefectureCode":"BAR","sousprefecture":"Baro"},{"prefectureCode":"KOUR","sousprefectureCode":"CIS","sousprefecture":"Cissela"},{"prefectureCode":"KOUR","sousprefectureCode":"DOU","sousprefecture":"Douako"},{"prefectureCode":"KOUR","sousprefectureCode":"DOUR","sousprefecture":"Doura"},{"prefectureCode":"KOUR","sousprefectureCode":"KIN","sousprefecture":"Kiniero"},{"prefectureCode":"KOUR","sousprefectureCode":"KOM","sousprefecture":"Komola-Koura"},{"prefectureCode":"KOUR","sousprefectureCode":"KOUMA","sousprefecture":"Koumana"},{"prefectureCode":"KOUR","sousprefectureCode":"KOURO","sousprefecture":"Kouroussa centre"},{"prefectureCode":"KOUR","sousprefectureCode":"SAN","sousprefecture":"Sanguiana"}]

// const regions = JSON.parse(regionsFile.toString())
// const prefectures = JSON.parse(prefecturesFile.toString())
// const sousprefectures = JSON.parse(sousprefecturesFile.toString())

/**************************************************/
/** **************** REGION GETTERS ****************/
/**************************************************/

const getRegionsAndCodes = () => (
  sortBy(uniq(regions), 'region')
 )

const getRegions = () => (
   sortBy(uniq(regions.map(data => (data.region))))
  )

const getRegionsCodes = () => (
    sortBy(uniq(regions.map(data => (data.code))))
  )

const getRegionNameByCode = regionCode => {
  let name = null
  regions.map(data => {
    if (data.code === regionCode) {
      name = data.region
    }
  })
  return name
}

const getRegionCodeByName = regionName => {
  let code = null
  regions.map(data => {
    if (data.region === regionName) {
      code = data.code
    }
  })
  return code
}

/***********************************************************/
/** ***************** PREFECTURE GETTERS ********************/
/***********************************************************/

const getPrefecturesAndCodes = () => (
    sortBy(uniq(prefectures), 'prefecture')
   )

const getPrefecturesCodes = () => (
    sortBy(uniq(prefectures.map(data => (data.prefectureCode))))
   )

const getPrefectures = () => (
    sortBy(uniq(prefectures.map(data => (data.prefecture))))
   )

const getPrefecturesAndCodesByRegionCode = regionCode => {
  let result = []
  prefectures.map(data => {
    if (data.regionCode === regionCode) {
      result.push(data)
    }
  })
  return sortBy(uniq(result))
}

const getPrefecturesByRegionCode = regionCode => {
  let result = []
  prefectures.map(data => {
    if (data.regionCode === regionCode) {
      result.push(data.prefecture)
    }
  })
  return sortBy(uniq(result))
}

const getPrefecturesByRegionName = regionName => {
  let regionCode = getRegionCodeByName(regionName)
  let result = []
  prefectures.map(data => {
    if (data.regionCode === regionCode) {
      result.push(data.prefecture)
    }
  })
  return sortBy(uniq(result))
}

const getPrefectureNameByCode = prefectureCode => {
  let name = null
  prefectures.map(data => {
    if (data.prefectureCode === prefectureCode) {
      name = data.prefecture
    }
  })
  return name
}

const getPrefectureCodeByName = prefectureName => {
  let code = null
  prefectures.map(data => {
    if (data.prefecture === prefectureName) {
      code = data.prefectureCode
    }
  })
  return code
}

/***********************************************************/
/** *************** SOUS PREFECTURE GETTERS *****************/
/***********************************************************/

const getSousprefecturesAndCodes = () => (
  sortBy(uniq(sousprefectures), 'sousprefecture')
 )

const getSousprefecturesCodes = () => (
  sortBy(uniq(sousprefectures.map(data => (data.sousprefectureCode))))
 )

const getSousprefectures = () => (
  sortBy(uniq(sousprefectures.map(data => (data.sousprefecture))))
 )

const getSousprefecturesAndCodesByPrefectureCode = prefectureCode => {
  let result = []
  sousprefectures.map(data => {
    if (data.prefectureCode === prefectureCode) {
      result.push(data)
    }
  })
  return sortBy(uniq(result))
}

const getSousprefecturesByPrefectureCode = prefectureCode => {
  let result = []
  sousprefectures.map(data => {
    if (data.prefectureCode === prefectureCode) {
      result.push(data.sousprefecture)
    }
  })
  return sortBy(uniq(result))
}

const getSousprefecturesAndCodesByPrefectureName = prefectureName => {
  let prefectureCode = getPrefectureCodeByName(prefectureName)
  let result = []
  sousprefectures.map(data => {
    if (data.prefectureCode === prefectureCode) {
      result.push(data)
    }
  })
  return sortBy(uniq(result))
}

const getSousprefecturesByPrefectureName = prefectureName => {
  let prefectureCode = getPrefectureCodeByName(prefectureName)
  let result = []
  sousprefectures.map(data => {
    if (data.prefectureCode === prefectureCode) {
      result.push(data.sousprefecture)
    }
  })
  return sortBy(uniq(result))
}

const getSousprefectureNameByCode = sousprefectureCode => {
  let name = null
  sousprefectures.map(data => {
    if (data.sousprefectureCode === sousprefectureCode) {
      name = data.sousprefecture
    }
  })
  return name
}

const getSousprefectureCodeByName = sousprefectureName => {
  let code = null
  prefectures.map(data => {
    if (data.sousprefecture === sousprefectureName) {
      code = data.sousprefectureCode
    }
  })
  return code
}

export default {
  // regions
  getRegionsAndCodes,
  getRegions,
  getRegionsCodes,
  getRegionNameByCode,
  getRegionCodeByName,

  // prefectures
  getPrefecturesAndCodes,
  getPrefecturesCodes,
  getPrefectures,
  getPrefecturesAndCodesByRegionCode,
  getPrefecturesByRegionCode,
  getPrefecturesByRegionName,
  getPrefectureNameByCode,
  getPrefectureCodeByName,

  // sousprectures
  getSousprefecturesAndCodes,
  getSousprefecturesCodes,
  getSousprefectures,
  getSousprefecturesAndCodesByPrefectureCode,
  getSousprefecturesAndCodesByPrefectureName,
  getSousprefecturesByPrefectureCode,
  getSousprefecturesByPrefectureName,
  getSousprefectureNameByCode,
  getSousprefectureCodeByName
}

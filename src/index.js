import fs from 'fs'
import path from 'path'
import {sortBy, uniq} from 'lodash'

const regionsPath = path.join(process.cwd(), 'data', 'regions.json')
const prefecturespath = path.join(process.cwd(), 'data', 'prefectures.json')
const sousprefecturespath = path.join(process.cwd(), 'data', 'sousprefectures.json')

let regionsFile = fs.readFileSync(regionsPath)
let prefecturesFile = fs.readFileSync(prefecturespath)
let sousprefecturesFile = fs.readFileSync(sousprefecturespath)

const regions = JSON.parse(regionsFile.toString())
const prefectures = JSON.parse(prefecturesFile.toString())
const sousprefectures = JSON.parse(sousprefecturesFile.toString())

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

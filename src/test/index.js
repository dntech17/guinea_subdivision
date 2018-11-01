const mocha = require('mocha')
const assert = require('assert')

const describe = mocha.describe
const it = mocha.it

// import des functions
const gs = require('../../dist/')

// guinea subdivison module
describe('Guinea Subdivision module', function () {
  it('GS module should not be null', function () {
    assert.notEqual(gs, null)
  })
  it('GS module should not be undefined', function () {
    assert.notEqual(gs, undefined)
  })
})

// region functions
describe('Regions', function () {
  describe('getRegions', function () {
    it('getRegions response shoud be an array', function () {
      assert.equal(typeof gs.getRegions(), 'object')
    })
    it('getRegions response shoud be should be 8 element', function () {
      var expected = 8
      assert.equal(gs.getRegions().length, expected)
    })
  })

  describe('getRegionsCodes', function () {
    it('getRegions shoud be a function ', function () {
      assert.equal(typeof gs.getRegionsCodes, 'function')
    })

    it('getRegionsCodes response shoud be an array', function () {
      assert.equal(typeof gs.getRegionsCodes(), 'object')
    })
    it('getRegionsCodes response shoud be should be 8 element', function () {
      var expected = 8
      assert.equal(gs.getRegionsCodes().length, expected)
    })

    it('each region should have a prefectures', function () {
      var codes = gs.getRegionsCodes()
      codes.forEach(function (value) {
        assert.notEqual(
          gs.getPrefecturesByRegionCode(value).length,
          0,
          'the region ' + value + ' does not have any prefecture'
          )
      })
    })
  })

  describe('getRegionNameByCode', function () {
    it('getRegionNameByCode should be a function', function () {
      assert.equal(typeof gs.getRegionNameByCode, 'function')
    })

    it('getRegionNameByCode response should be a string', function () {
      assert.equal(typeof gs.getRegionNameByCode(gs.getRegionsCodes()[0]), 'string')
    })
  })

  describe('getRegionCodeByName', function () {
    it('getRegionCodeByName should be a function', function () {
      assert.equal(typeof gs.getRegionCodeByName, 'function')
    })
    it('getRegionCodeByName response should be a string', function () {
      assert.equal(typeof gs.getRegionCodeByName(gs.getRegionsAndCodes()[0].region), 'string')
    })
  })
})

// les prefectures
describe('Prefecture', function () {
  describe('getPrefecturesAndCodes', function () {
    it('getPrefecturesAndCodes should be a function', function () {
      assert.equal(typeof gs.getPrefecturesAndCodes, 'function')
    })
    it('getPrefecturesAndCodes should return a json', function () {
      assert.equal(typeof gs.getPrefecturesAndCodes(), 'object')
    })
  })

  describe('getPrefecturesCodes', function () {
    it('getPrefecturesCodes should be a function', function () {
      assert.equal(typeof gs.getPrefecturesCodes, 'function')
    })
    it('getPrefecturesCodes should return a array', function () {
      assert.equal(typeof gs.getPrefecturesCodes(), 'object')
    })
    it('getPrefecturesCodes response length should be 33', function () {
      var expected = 34 // because of conakry
      assert.equal(gs.getPrefecturesCodes().length, expected)
    })
    it('each prefecture code should have a subprefecture', function () {
      var codes = gs.getPrefecturesCodes()
      codes.forEach(function (value) {
        assert.notEqual(
          gs.getSousprefecturesByPrefectureCode(value).length,
          0,
          'the prefecture with ' + value + ' does not have any subprefecture'
          )
      })
    })
  })

  describe('getPrefectures', function () {
    it('getPrefectures should be a function', function () {
      assert.equal(typeof gs.getPrefectures, 'function')
    })
    it('getPrefectures should return a json', function () {
      assert.equal(typeof gs.getPrefectures(), 'object')
    })
    it('each prefecture should have a subprefecture', function () {
      var codes = gs.getPrefectures()
      codes.forEach(function (value) {
        assert.notEqual(
          gs.getSousprefecturesByPrefectureName(value).length,
          0,
          'the prefecture ' + value + ' does not have any subprefecture')
      })
    })
  })

  describe('getPrefecturesByRegionCode', function () {
    it('getPrefecturesByRegionCode should be a function', function () {
      assert.equal(typeof gs.getPrefecturesByRegionCode, 'function')
    })
    it('getPrefecturesByRegionCode should return a object', function () {
      assert.equal(
        typeof gs.getPrefecturesByRegionCode(gs.getRegionsAndCodes()[0].code),
        'object'
        )
    })
    it('getPrefecturesByRegionCode should return a object', function () {
      assert.notEqual(
        gs.getPrefecturesByRegionCode(gs.getRegionsAndCodes()[0].code).length, 0)
    })
  })

  describe('getPrefecturesByRegionName', function () {
    it('getPrefecturesByRegionName should be a function', function () {
      assert.equal(typeof gs.getPrefecturesByRegionName, 'function')
    })
    it('getPrefecturesByRegionName should return a object', function () {
      assert.equal(
        typeof gs.getPrefecturesByRegionName(gs.getRegionsAndCodes()[0].region),
        'object'
        )
    })
    it('getPrefecturesByRegionName should return a object', function () {
      assert.notEqual(
        gs.getPrefecturesByRegionName(gs.getRegionsAndCodes()[0].region).length, 0)
    })
  })

  describe('getPrefectureNameByCode', function () {
    it('getPrefectureNameByCode should be a function', function () {
      assert.equal(typeof gs.getPrefectureNameByCode, 'function')
    })
    it('getPrefecturesByRegionName should return a string', function () {
      assert.equal(
        typeof gs.getPrefectureNameByCode(gs.getPrefecturesAndCodes()[0].prefectureCode),
        'string'
        )
    })
  })

  describe('getPrefectureCodeByName', function () {
    it('getPrefectureCodeByName should be a function', function () {
      assert.equal(typeof gs.getPrefectureCodeByName, 'function')
    })
    it('getPrefectureCodeByName should return a string', function () {
      assert.equal(
        typeof gs.getPrefectureCodeByName(gs.getPrefecturesAndCodes()[0].prefecture),
        'string'
        )
    })
  })

  // sousprefecture
  describe('sous prefecture', function () {
    describe('getSousprefecturesAndCodes', function () {
      it('getSousprefecturesAndCodes should be a function', function () {
        assert.equal(typeof gs.getSousprefecturesAndCodes, 'function')
      })
      it('getSousprefecturesAndCodes should return a object', function () {
        assert.equal(typeof gs.getSousprefecturesAndCodes(), 'object')
      })
    })

    describe('getSousprefecturesCodes', function () {
      it('getSousprefecturesCodes should be a function', function () {
        assert.equal(typeof gs.getSousprefecturesCodes, 'function')
      })
      it('getSousprefecturesCodes should return a object', function () {
        assert.equal(typeof gs.getSousprefecturesCodes(), 'object')
      })
      it('getSousprefecturesCodes response length should not be 0', function () {
        assert.notEqual(gs.getSousprefecturesCodes().length, 0)
      })
    })

    describe('getSousprefectures', function () {
      it('getSousprefectures should be a function', function () {
        assert.equal(typeof gs.getSousprefectures, 'function')
      })
      it('getSousprefectures should return a object', function () {
        assert.equal(typeof gs.getSousprefectures(), 'object')
      })
      it('getSousprefectures response length should not be 0', function () {
        assert.notEqual(gs.getSousprefectures().length, 0)
      })
      it('getSousprefectures response length should be 33', function () {
        var expected = 349 // including conakry
        assert.equal(gs.getSousprefectures().length, expected)
      })
    })

    describe('getSousprefecturesAndCodesByPrefectureCode', function () {
      it('getSousprefecturesAndCodesByPrefectureCode should be a function', function () {
        assert.equal(typeof gs.getSousprefecturesAndCodesByPrefectureCode, 'function')
      })
      it('getSousprefecturesAndCodesByPrefectureCode should return a object', function () {
        assert.equal(typeof gs.getSousprefecturesAndCodesByPrefectureCode('CONA'), 'object')
      })
    })

    describe('getSousprefecturesAndCodesByPrefectureName', function () {
      it('getSousprefecturesAndCodesByPrefectureName should be a function', function () {
        assert.equal(typeof gs.getSousprefecturesAndCodesByPrefectureName, 'function')
      })
      it('getSousprefecturesAndCodesByPrefectureName should return a object', function () {
        assert.equal(typeof gs.getSousprefecturesAndCodesByPrefectureName('Conakry'), 'object')
      })
    })

    describe('getSousprefecturesByPrefectureCode', function () {
      it('getSousprefecturesByPrefectureCode should be a function', function () {
        assert.equal(typeof gs.getSousprefecturesByPrefectureCode, 'function')
      })
      it('getSousprefecturesByPrefectureCode should return a object', function () {
        assert.equal(typeof gs.getSousprefecturesByPrefectureCode('CONA'), 'object')
      })
    })

    describe('getSousprefecturesByPrefectureName', function () {
      it('getSousprefecturesByPrefectureName should be a function', function () {
        assert.equal(typeof gs.getSousprefecturesByPrefectureName, 'function')
      })
      it('getSousprefecturesByPrefectureName should return a object', function () {
        assert.equal(typeof gs.getSousprefecturesByPrefectureName('Conakry'), 'object')
      })
    })

    describe('getSousprefectureNameByCode', function () {
      it('getSousprefectureNameByCode should be a function', function () {
        assert.equal(typeof gs.getSousprefectureNameByCode, 'function')
      })
      it('getSousprefectureNameByCode should return a object', function () {
        assert.equal(typeof gs.getSousprefectureNameByCode(gs.getSousprefecturesCodes()[0]), 'string')
      })
    })

    describe('getSousprefectureCodeByName', function () {
      it('getSousprefectureCodeByName should be a function', function () {
        assert.equal(typeof gs.getSousprefectureCodeByName, 'function')
      })
      it('getSousprefectureCodeByName should return a object', function () {
        assert.equal(typeof gs.getSousprefectureCodeByName(gs.getSousprefectures()[0]), 'string')
      })
    })
  })
})

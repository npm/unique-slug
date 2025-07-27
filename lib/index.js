'use strict'
const MurmurHash3 = require('imurmurhash')

const murmurHash3Cache = new Map()

module.exports = function (uniq) {
  if (uniq) {
    let hash = murmurHash3Cache.get(uniq)
    if (!hash) {
      hash = new MurmurHash3(uniq)
      murmurHash3Cache.set(uniq, hash)
    }
    return ('00000000' + hash.result().toString(16)).slice(-8)
  } else {
    return (Math.random().toString(16) + '0000000').slice(2, 10)
  }
}

'use strict'
var crypto = require('crypto')
var MurmurHash3 = require('imurmurhash')

module.exports = function (uniq) {
  if (uniq) {
    var hash = new MurmurHash3(uniq)
    return ('00000000' + hash.result().toString(16)).substr(-8)
  } else {
    // Called without a callback, because this interface usually should neither
    // block for a noticeable time nor error.
    return crypto.randomBytes(4).toString('hex')
  }
}

'use strict'
const { createHash, randomBytes } = require('node:crypto')

module.exports = function (uniq) {
  if (uniq) {
    return createHash('sha1').update(uniq).digest('hex').slice(0, 8)
  } else {
    return randomBytes(4).toString('hex')
  }
}

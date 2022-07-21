'use strict'
var t = require('tap')
var uniqueSlug = require('../lib/index.js')

t.plan(5)
var slugA = uniqueSlug()
t.equal(slugA.length, 8, 'random slugs are 8 chars')
t.not(slugA, uniqueSlug(), "two slugs aren't the same")
var base = '/path/to/thingy'
var slugB = uniqueSlug(base)
t.equal(slugB.length, 8, 'string based slugs are 8 chars')
t.equal(slugB, uniqueSlug(base), 'two string based slugs, from the same string are the same')
t.not(slugB, uniqueSlug(slugA), 'two string based slongs, from diff strings are different')

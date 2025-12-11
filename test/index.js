'use strict'
const { test } = require('node:test')
const assert = require('node:assert')
const uniqueSlug = require('../lib/index.js')

test('random slugs are 8 chars', () => {
  const slugA = uniqueSlug()
  assert.strictEqual(slugA.length, 8)
})

test("two slugs aren't the same", () => {
  const slugA = uniqueSlug()
  assert.notStrictEqual(slugA, uniqueSlug())
})

test('string based slugs are 8 chars', () => {
  const base = '/path/to/thingy'
  const slugB = uniqueSlug(base)
  assert.strictEqual(slugB.length, 8)
})

test('two string based slugs, from the same string are the same', () => {
  const base = '/path/to/thingy'
  const slugB = uniqueSlug(base)
  assert.strictEqual(slugB, uniqueSlug(base))
})

test('two string based slongs, from diff strings are different', () => {
  const base = '/path/to/thingy'
  const slugA = uniqueSlug()
  const slugB = uniqueSlug(base)
  assert.notStrictEqual(slugB, uniqueSlug(slugA))
})

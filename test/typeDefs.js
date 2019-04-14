const test = require('ava')
const typeDefs = require('../src/typeDefs')

test('typeDefs should return a string schema', t => {
  t.is(typeof typeDefs, 'string')
})

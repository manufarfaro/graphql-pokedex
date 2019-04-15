const test = require('ava')
const resolvers = require('../src/resolvers')

test('resolver module should return a resolver object', t => {
  const expectedResolverKeys = ['Query', 'Mutation', 'Type', 'Pokemon']

  t.deepEqual(Object.keys(resolvers), expectedResolverKeys)
})

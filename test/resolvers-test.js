const test = require('ava')
const { stub } = require('sinon')
const resolvers = require('../src/resolvers')

const mocks = require('../src/mocks')

const typesMock = [{
  id: 0,
  name: 'Grass',
  strongWith: [],
  weakWith: [],
  pokemons: []
}]
stub(mocks, 'types').callsFake(() => typesMock)

const pokemonsMock = [{
  id: 0,
  nationalNumber: 1,
  name: 'dummyPokemonName',
  height: 0.7,
  weight: 6.9,
  hp: 45,
  attack: 49,
  defense: 49,
  types: [],
  artwork: ''
}]
stub(mocks, 'pokemons').callsFake(() => typesMock)

test('info resolver should return an string', t => {
  const { Query: { info }} = resolvers
  const infoResult = info()
  const expectedText = 'This is a dummy query'

  t.truthy(infoResult, expectedText)
})

test('type query should return a types collection', t => {
  const { Query: { type } } = resolvers
  const typeResult = type()

  t.truthy(typeResult)
})

test('pokemon query should return a types collection', t => {
  const { Query: { pokemon } } = resolvers
  const pokemonResult = pokemon()

  t.truthy(pokemonResult)
})

const { types, pokemons } = require('./mocks')


const createType = (parent, { name }) => {
  const nextId = types.length
  const newType = {
    id: nextId,
    name
  }

  types.push(newType)
  return newType
}

const resolvers = {
  Query: {
    info: () => 'This is a dummy query',
    type: () => types,
    pokemon: () => pokemons
  },
  Mutation: {
    createType
  },
  Type: {
    name: parent => parent.name,
    strongWith: parent => parent.strongWith,
    weakWith: parent => parent.weakWith,
    pokemon: parent => parent.pokemons.map(id => pokemons[id])
  },
  Pokemon: {
    name: parent => parent.name,
    type: parent => parent.types.map(id => types[id]),
    height: parent => parent.height,
    weight: parent => parent.weight,
    hp: parent => parent.hp,
    attack: parent => parent.attack,
    defense: parent => parent.defense,
    artwork: parent => parent.artwork
  }
}

module.exports = resolvers

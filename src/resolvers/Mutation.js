const createType = (root, { name, strongWith = [], weakWith = [] }, context) => {
  return context.prisma.createType({
    name,
    strongWith,
    weakWith
  })
}

const createPokemon = (
  root, {
    nationalNumber,
    name,
    height,
    weight,
    hp,
    attack,
    defense,
    type = [],
    artwork,
    previousEvolutions = [],
    nextEvolutions = []
  },
  context) => {
  return context.prisma.createPokemon({
    nationalNumber,
    name,
    height,
    weight,
    hp,
    attack,
    defense,
    type,
    artwork,
    previousEvolutions,
    nextEvolutions
  })
}

module.exports = {
  createType,
  createPokemon
}

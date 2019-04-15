const test = require('ava')
const { spy } = require('sinon')

const {
  type,
  nextEvolutions,
  previousEvolutions
} = require('../../src/resolvers/Pokemon')

const prismaContextApi = {
  prisma: {
    pokemon: spy(() => ({
      types: () => {},
      nextEvolutions: () => {},
      previousEvolutions: () => {}
    })),
  }
}

test('should call prisma types when pokemons are called', t => {
  type({}, null, prismaContextApi)
  nextEvolutions({}, null, prismaContextApi)
  previousEvolutions({}, null, prismaContextApi)
  t.is(prismaContextApi.prisma.pokemon.calledThrice, true)
})

const test = require('ava')
const { spy } = require('sinon')

const {
  weakWith,
  strongWith,
  pokemon
} = require('../../src/resolvers/Type')

const prismaContextApi = {
  prisma: {
    type: spy(() => ({
      weakWith: () => {},
      strongWith: () => {},
      pokemons: () => {}
    })),
  }
}

test('should call prisma types when types are called', t => {
  weakWith({}, null, prismaContextApi)
  strongWith({}, null, prismaContextApi)
  pokemon({}, null, prismaContextApi)
  t.is(prismaContextApi.prisma.type.calledThrice, true)
})

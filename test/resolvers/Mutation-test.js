const test = require('ava')
const { spy } = require('sinon')

const {
  createType,
  createPokemon
} = require('../../src/resolvers/Mutation')

const prismaContextApi = {
  prisma: {
    createType: spy(),
    createPokemon: spy(),
  }
}

test('should call prisma context function when createType is called', t => {
  createType({}, {}, prismaContextApi)
  t.is(prismaContextApi.prisma.createType.calledOnce, true)
})

test('should call prisma context function when createPokemon is called', t => {
  createPokemon({}, {}, prismaContextApi)
  t.is(prismaContextApi.prisma.createPokemon.calledOnce, true)
})

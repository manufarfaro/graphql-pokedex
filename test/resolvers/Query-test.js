const test = require('ava')
const { spy } = require('sinon')
const Query = require('../../src/resolvers/Query')

const prismaContextApi = {
  prisma: {
    types: spy(),
    pokemons: spy()
  }
}

test('should return a text when info is called', t => {
  const { info } = Query
  const expectedText = 'This is a dummy query'

  t.is(info(), expectedText)
})

test('should call prisma types when type is called', t => {
  const { type } = Query
  type(null, {}, prismaContextApi)
  t.is(prismaContextApi.prisma.types.calledOnce, true)
})

test('should call prisma types when pokemon is called', t => {
  const { pokemon } = Query
  pokemon(null, {}, prismaContextApi)
  t.is(prismaContextApi.prisma.pokemons.calledOnce, true)
})

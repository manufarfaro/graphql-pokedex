const info = () => 'This is a dummy query'

const type = (root, args, context) => context.prisma.types(args)

const pokemon = (root, args, context) => context.prisma.pokemons(args)

module.exports = {
  info,
  type,
  pokemon
}

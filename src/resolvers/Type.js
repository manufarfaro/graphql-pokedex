const weakWith = ({ id }, args, context) => context.prisma.type({ id }).weakWith()
const strongWith = ({ id }, args, context) => context.prisma.type({ id }).strongWith()
const pokemon = ({ id }, args, context) => context.prisma.type({ id }).pokemons()

module.exports = {
  weakWith,
  strongWith,
  pokemon
}

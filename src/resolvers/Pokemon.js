const type = ({ id }, args, context) => context.prisma.pokemon({ id }).types()
const previousEvolutions = ({ id }, args, context) => context.prisma.pokemon({ id }).previousEvolutions()
const nextEvolutions = ({ id }, args, context) => context.prisma.pokemon({ id }).nextEvolutions()

module.exports = {
  type,
  previousEvolutions,
  nextEvolutions
}

const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = require('./resolvers')

const schemaUrl = './src/schema.graphql'

const server = new GraphQLServer({
  typeDefs: schemaUrl,
  resolvers,
  context: { prisma }
})

function serverOnStart() {
  console.log('Server is running on http://localhost:4000')
}

server
  .start()
  .then(serverOnStart)

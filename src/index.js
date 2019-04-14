const { GraphQLServer } = require('graphql-yoga')

const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

function serverOnStart() {
  console.log('Server is running on http://localhost:4000')
}

server
  .start()
  .then(serverOnStart)

const typeDefs =`
  type Query {
    info: String!
    type: [Type!]!
    pokemon: [Pokemon!]!
  }

  type Type {
    name: String!
    strongWith: [Type!]!
    weakWith: [Type!]!
    pokemon: [Pokemon!]!
  }
  
  type Pokemon {
    nationalNumber: Int
    name: String!
    height: Float
    weight: Float
    hp: Int
    attack: Int
    defense: Int
    type: [Type!]!
    artwork: String
    previousEvolutions: [Pokemon!]!
    nextEvolutions: [Pokemon!]!
  }
`

module.exports = typeDefs

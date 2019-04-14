const types = [
  {
    id: 0,
    name: 'Grass',
    strongWith: [],
    weakWith: [],
    pokemons: [0]
  },
  {
    id: 1,
    name: 'Poison',
    strongWith: [],
    weakWith: [],
    pokemons: [0]
  }
]

const pokemons = [
  {
    id: 0,
    nationalNumber: 1,
    name: 'bulbasaur',
    height: 0.7,
    weight: 6.9,
    hp: 45,
    attack: 49,
    defense: 49,
    types: [0, 1],
    artwork: 'https://img.pokemondb.net/artwork/bulbasaur.jpg'
  }
]

module.exports = {
  types,
  pokemons
}

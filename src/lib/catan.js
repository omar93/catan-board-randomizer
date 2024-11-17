import { writable } from "svelte/store";

const resourceMapper = {
  wood: 4,
  brick: 3,
  sheep: 4,
  wheat: 4,
  stone: 3,
  dessert: 1 
}

const shuffleArray = array => {  
  const shuffled = array.slice()
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }
  return shuffled
}

const createTileTypes = (resourceMapper) => {
  let tilesList = []
  Object.keys(resourceMapper).forEach(resourceType => {
    let value = resourceMapper[resourceType]
    for(let i = 0; i < value; i++) {
      tilesList = [...tilesList, resourceType]
    }
  })
  return tilesList
}

let createdTiles = createTileTypes(resourceMapper)
let shuffeledTiles = shuffleArray(createdTiles)

export const tiles = writable([
  {row: 1, column: 1, resource: shuffeledTiles.pop()},
  {row: 1, column: 2, resource: shuffeledTiles.pop()},
  {row: 1, column: 3, resource: shuffeledTiles.pop()},

  {row: 2, column: 1, resource: shuffeledTiles.pop()},
  {row: 2, column: 2, resource: shuffeledTiles.pop()},
  {row: 2, column: 3, resource: shuffeledTiles.pop()},
  {row: 2, column: 4, resource: shuffeledTiles.pop()},

  {row: 3, column: 1, resource: shuffeledTiles.pop()},
  {row: 3, column: 2, resource: shuffeledTiles.pop()},
  {row: 3, column: 3, resource: shuffeledTiles.pop()},
  {row: 3, column: 4, resource: shuffeledTiles.pop()},
  {row: 3, column: 5, resource: shuffeledTiles.pop()},

  {row: 4, column: 1, resource: shuffeledTiles.pop()},
  {row: 4, column: 2, resource: shuffeledTiles.pop()},
  {row: 4, column: 3, resource: shuffeledTiles.pop()},
  {row: 4, column: 4, resource: shuffeledTiles.pop()},

  {row: 5, column: 1, resource: shuffeledTiles.pop()},
  {row: 5, column: 2, resource: shuffeledTiles.pop()},
  {row: 5, column: 3, resource: shuffeledTiles.pop()},
])


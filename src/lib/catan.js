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
let shuffledTiles = shuffleArray(createdTiles)

export const tiles = writable([
  // Row 0 (3 tiles)
  { row: 0, column: -1, resource: shuffledTiles.pop() },
  { row: 0, column: 0, resource: shuffledTiles.pop() },
  { row: 0, column: 1, resource: shuffledTiles.pop() },

  // Row 1 (4 tiles)
  { row: 1, column: -1.5, resource: shuffledTiles.pop() },
  { row: 1, column: -0.5, resource: shuffledTiles.pop() },
  { row: 1, column: 0.5, resource: shuffledTiles.pop() },
  { row: 1, column: 1.5, resource: shuffledTiles.pop() },

  // Row 2 (5 tiles) 
  { row: 2, column: -2, resource: shuffledTiles.pop() },
  { row: 2, column: -1, resource: shuffledTiles.pop() },
  { row: 2, column: 0, resource: shuffledTiles.pop() },
  { row: 2, column: 1, resource: shuffledTiles.pop() },
  { row: 2, column: 2, resource: shuffledTiles.pop() },

  // Row 3 (4 tiles)
  { row: 3, column: -1.5, resource: shuffledTiles.pop() },
  { row: 3, column: -0.5, resource: shuffledTiles.pop() },
  { row: 3, column: 0.5, resource: shuffledTiles.pop() },
  { row: 3, column: 1.5, resource: shuffledTiles.pop() },

  // Row 4 (3 tiles)
  { row: 4, column: -1, resource: shuffledTiles.pop() },
  { row: 4, column: 0, resource: shuffledTiles.pop() },
  { row: 4, column: 1, resource: shuffledTiles.pop() },
])


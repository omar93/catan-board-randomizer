import { writable } from "svelte/store"
import { coordinates, chits } from "./helpers"


const resourceMapper = {
  wood: 4,
  brick: 3,
  sheep: 4,
  wheat: 4,
  stone: 3,
  desert: 1
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

let types = shuffledTiles.slice()


coordinates.forEach(tile => {
  let resource = tile.resource = types.pop()
  if(resource != 'desert') {
    tile.chit = chits.shift()
  }
})

export const tiles = writable(coordinates.slice())


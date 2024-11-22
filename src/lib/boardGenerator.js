import { writable } from "svelte/store"
import { chits, coordinatesList, resourceMapper  } from "./boardData"

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

let createdTiles = createTileTypes(resourceMapper)
let shuffledTiles = shuffleArray(createdTiles)

let randomCoordinateList = Math.floor(Math.random() * coordinatesList.length)

coordinatesList[randomCoordinateList].forEach(tile => {
  let resource = tile.resource = shuffledTiles.pop()
  if(resource != 'desert') {
    tile.chit = chits.shift()
  }
})

export const tiles = writable(coordinatesList[randomCoordinateList])


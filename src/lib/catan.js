import { writable } from "svelte/store"

const chitOrder = [
  {A: 5},
  {B: 2},
  {C: 6},
  {D: 3},
  {E: 8},
  {F: 10},
  {G: 9},
  {H: 12},
  {I: 11},
  {J: 4},
  {K: 8},
  {L: 10},
  {M: 9},
  {N: 4},
  {O: 5},
  {P: 6},
  {Q: 3},
  {R: 11}
]

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
let chits =  chitOrder.slice()

let coordinates = [
  // Outer circle
  { row: 0, column: -2},
  { row: 0, column: 0},
  { row: 0, column: 2},
  { row: 1, column: 3},
  { row: 2, column: 4},
  { row: 3, column: 3},
  { row: 4, column: 2},
  { row: 4, column: 0},
  { row: 4, column: -2},
  { row: 3, column: -3},
  { row: 2, column: -4},
  { row: 1, column: -3},
  // Inner circle
  { row: 1, column: -1},
  { row: 1, column: 1},
  { row: 2, column: 2},
  { row: 3, column: 1},
  { row: 3, column: -1},
  { row: 2, column: -2},
  // Center
  {row: 2, column: 0}
]

coordinates.forEach(tile => {
  let resource = tile.resource = types.pop()
  if(resource != 'desert') {
    tile.chit = chits.shift()
  }
})

export const tiles = writable(coordinates.slice())


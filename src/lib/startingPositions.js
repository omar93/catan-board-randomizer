const order1 =      ["A", "B", "C", "K", "L", "M", "D", "J", "Q", "R", "N", "E", "I", "P", "O", "F",, "H", "G", "X"];
const topLeftFlat = ["A", "B", "C", "K", "L", "M", "D", "J", "Q", "R", "N", "E", "I", "P", "O", "F", "X", "H", "G"];
const topLeft = [
      ["A", "B", "C"],
    ["K", "L", "M", "D"],
  ["J", "Q", "R", "N", "E"],
    ["I", "P", "O", "F"],
      ["X", "H", "G"]
]

const order2 =       ["K", "L", "A", "J", "Q", "M", "B", "I", "P", "R", "N", "C", "H", "O", "D", "G", "F", "E"];
const topRightFlat = ["K", "L", "A", "J", "Q", "M", "B", "I", "P", "R", "N", "C", "H", "O", "X", "D", "G", "F", "E"];
const topRight = [
      ["K", "L", "A"],
    ["J", "Q", "M", "B"],
  ["I", "P", "R", "N", "C"],
    ["H", "O", "X", "D"],
      ["G", "F", "E"]
]

const order3 =         ["C", "D", "E", "B", "M", "N", "F", "A", "L", "R", "O", "G", "Q", "P", "H", "K", "J", "I"];
const middleLeftFlat = ["C", "D", "E", "B", "M", "N", "F", "A", "L", "R", "O", "G", "X", "Q", "P", "H", "K", "J", "I"];
const middleLeft = [
      ["C", "D", "E"],
    ["B", "M", "N", "F"],
  ["A", "L", "R", "O", "G"],
    ["X", "Q", "P", "H"],
      ["K", "J", "I"]
]

const order4 =          ["I", "J", "K", "H", "Q", "R", "L", "G", "P", "M", "A", "F", "O", "N", "B", "E", "D", "C"];
const middleRightFlat = ["I", "J", "K", "H", "Q", "R", "L", "G", "P", "X", "M", "A", "F", "O", "N", "B", "E", "D", "C"];
const middleRight = [
      ["I", "J", "K"],
    ["H", "Q", "R", "L"],
  ["G", "P", "X", "M", "A"],
    ["F", "O", "N", "B"],
      ["E", "D", "C"]
]

const order5 =         ["E", "F", "G", "D", "N", "O", "H", "C", "M", "R", "P", "I", "B", "L", "Q", "J", "A", "K"];
const bottomLeftFlat = ["E", "F", "G", "D", "N", "O", "H", "C", "M", "R", "P", "I", "B", "L", "Q", "J", "A", "X", "K"];
const bottomLeft = [
      ["E", "F", "G"],
    ["D", "N", "O", "H"],
  ["C", "M", "R", "P", "I"],
    ["B", "L", "Q", "J"],
      ["A", "X", "K"]
]

const order6 =          ["F", "G", "H", "O", "P", "I", "E", "N", "R", "Q", "J", "D", "M", "L", "K", "C", "B", "A"];
const bottomRightFlat = ["F", "G", "H", "X", "O", "P", "I", "E", "N", "R", "Q", "J", "D", "M", "L", "K", "C", "B", "A"];
const bottomRight = [
      ["F", "G", "H"],
    ["X", "O", "P", "I"],
  ["E", "N", "R", "Q", "J"],
    ["D", "M", "L", "K"],
      ["C", "B", "A"]
]

export const orders = [order1, order2, order3, order4, order5, order6]

export const initialGridNumbers = {
  A: 5,
  B: 2,
  C: 6,
  D: 3,
  E: 8,
  F: 10,
  G: 9,
  H: 12,
  I: 11,
  J: 4,
  K: 8,
  L: 10,
  M: 9,
  N: 4,
  O: 5,
  P: 6,
  Q: 3,
  R: 11,
  X: 0
}


// const IsOutCircle = (index) => index === 0
// const IsInnerCircle = (index) => index === 1
// const isCenter = (index) => index === 2

// const pushTileToArray = (tile, array) => {
//   array.push(tile)
// }

// const pushdesertToArray = (desert, array) => {
//   let randomIndex = Math.floor(Math.random() * array.length)
// }

// let makeTile = () => {
//   let circularArray = 
//   [
//     ["A", "B", "C", "K", "L", "M", "D", "J", "Q", "R", "N", "E"],
//     ["I", "P", "O", "F", "H", "G"],
//     []
//   ]

//   let randomCircleArrayIndex = Math.floor(Math.random() * circularArray.length)
//   let desertArray = circularArray[randomCircleArrayIndex]
//   let desert = "X"

//   if(IsOutCircle(randomCircleArrayIndex)) {
//     pushdesertToArray(desert, desertArray)
//     let tile = circularArray[randomCircleArrayIndex].pop()
//     pushTileToNextCircle(tile,circularArray[randomCircleArrayIndex + 1])
//   }
  
//   if(IsInnerCircle(randomCircleArrayIndex)) {
//     pushdesertToArray(desert, desertArray)
//     let tile = circularArray[randomCircleArrayIndex].pop()
//     pushTileToNextCircle(tile, circularArray[randomCircleArrayIndex + 1])
//   }

//   if(isCenter(randomCircleArrayIndex)) {
//     pushdesertToArray(desert, circularArray[randomCircleArrayIndex])
//   }
  
//   return circularArray.flat(Infinity)

// }


// let x = makeTile()
// // console.log("x",x);


export let order = order1.map(key => {(`${initialGridNumbers[key]}:${key}`)
})


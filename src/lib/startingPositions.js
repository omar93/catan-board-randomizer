const order1 =      ["A", "B", "C", "K", "L", "M", "D", "J", "Q", "R", "N", "E", "I", "P", "O", "F", "H", "G"];
const topLeftFlat = ["A", "B", "C", "K", "L", "M", "D", "J", "Q", "R", "N", "E", "I", "P", "O", "F", "X", "H", "G"];
const topLeft = [
  ["A", "B", "C"],
  ["K", "L", "M", "D"],
  ["J", "Q", "R", "N", "E"],
  ["I", "P", "O", "F"],
  ["X", "H", "G"]
];

const order2 =       ["K", "L", "A", "J", "Q", "M", "B", "I", "P", "R", "N", "C", "H", "O", "D", "G", "F", "E"];
const topRightFlat = ["K", "L", "A", "J", "Q", "M", "B", "I", "P", "R", "N", "C", "H", "O", "X", "D", "G", "F", "E"];
const topRight = [
      ["K", "L", "A"],
    ["J", "Q", "M", "B"],
  ["I", "P", "R", "N", "C"],
    ["H", "O", "X", "D"],
      ["G", "F", "E"]
];

const order3 =         ["C", "D", "E", "B", "M", "N", "F", "A", "L", "R", "O", "G", "Q", "P", "H", "K", "J", "I"];
const middleLeftFlat = ["C", "D", "E", "B", "M", "N", "F", "A", "L", "R", "O", "G", "X", "Q", "P", "H", "K", "J", "I"];
const middleLeft = [
      ["C", "D", "E"],
    ["B", "M", "N", "F"],
  ["A", "L", "R", "O", "G"],
    ["X", "Q", "P", "H"],
      ["K", "J", "I"]
];

const order4 =          ["I", "J", "K", "H", "Q", "R", "L", "G", "P", "M", "A", "F", "O", "N", "B", "E", "D", "C"];
const middleRightFlat = ["I", "J", "K", "H", "Q", "R", "L", "G", "P", "X", "M", "A", "F", "O", "N", "B", "E", "D", "C"];
const middleRight = [
      ["I", "J", "K"],
    ["H", "Q", "R", "L"],
  ["G", "P", "X", "M", "A"],
    ["F", "O", "N", "B"],
      ["E", "D", "C"]
];

const order5 =         ["E", "F", "G", "D", "N", "O", "H", "C", "M", "R", "P", "I", "B", "L", "Q", "J", "A", "K"];
const bottomLeftFlat = ["E", "F", "G", "D", "N", "O", "H", "C", "M", "R", "P", "I", "B", "L", "Q", "J", "A", "X", "K"];
const bottomLeft = [
      ["E", "F", "G"],
    ["D", "N", "O", "H"],
  ["C", "M", "R", "P", "I"],
    ["B", "L", "Q", "J"],
      ["A", "X", "K"]
];

const order6 =          ["F", "G", "H", "O", "P", "I", "E", "N", "R", "Q", "J", "D", "M", "L", "K", "C", "B", "A"];
const bottomRightFlat = ["F", "G", "H", "X", "O", "P", "I", "E", "N", "R", "Q", "J", "D", "M", "L", "K", "C", "B", "A"];
const bottomRight = [
      ["F", "G", "H"],
    ["X", "O", "P", "I"],
  ["E", "N", "R", "Q", "J"],
    ["D", "M", "L", "K"],
      ["C", "B", "A"]
];

export const orders = [order1, order2, order3, order4, order5, order6]
export const initialGridNumbers = {
  A: 5,
  B: 2,
  C: 6,
  L: 10,
  M: 9,
  N: 4,
  D: 3,
  K: 8,
  R: 11,
  O: 5,
  E: 8,
  J: 4,
  Q: 3,
  P: 6,
  F: 10,
  I: 11,
  H: 12,
  G: 9
}
export let order = orders[Math.floor(Math.random() * orders.length)].map(key => initialGridNumbers[key])

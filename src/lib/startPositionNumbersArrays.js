const allCombinationsArray = []

const initialGridNumbersTopLeft = [
  { A: 5 }, { B: 2 }, { C: 6 },  
  { L: 10 }, { M: 9 }, { N: 4 }, { D: 3 },
  { K: 8 }, { R: 11 }, { O: 5 }, { E: 8 },  
  { J: 4 }, { Q: 3 }, { P: 6 }, { F: 10 }, 
  { I: 11 }, { H: 12 }, { G: 9 },  
];

// Restructure into rows matching the board layout
const rows = [
  initialGridNumbersTopLeft.slice(0, 3),   // Row 1: 3 tiles
  initialGridNumbersTopLeft.slice(3, 7),  // Row 2: 4 tiles
  initialGridNumbersTopLeft.slice(7, 12), // Row 3: 5 tiles
  initialGridNumbersTopLeft.slice(12, 16),// Row 4: 4 tiles
  initialGridNumbersTopLeft.slice(16)     // Row 5: 3 tiles
];

// Reverse the rows to start from top-right while keeping sequence intact
const adjustedRows = [
  rows[0].reverse(), // Row 1: Reverse order
  rows[1].reverse(), // Row 2: Reverse order
  rows[2].reverse(), // Row 3: Reverse order
  rows[3].reverse(), // Row 4: Reverse order
  rows[4].reverse()  // Row 5: Reverse order
];

// Combine rows back into the final shifted array
const shiftedGrid = adjustedRows.flat();

console.log(shiftedGrid);
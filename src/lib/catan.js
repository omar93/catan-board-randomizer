const allTiles = {
  'A': 5, 'B': 2, 'C': 6,     // Top row
  'D': 3, 'E': 8, 'F': 10, 'G': 9,  // Continuing spiral
  'H': 12, 'I': 11, 'J': 4, 'K': 8, 'L': 10,  // Continuing
  'M': 9, 'N': 4, 'O': 5, 'P': 6,
  'Q': 3, 'R': 11
};

// Standard board layout with top-left start
const boardLayout = [
      ['A', 'B', 'C'],
    ['K', 'L', 'M', 'D'],   
  ['J', 'Q', 'R', 'N', 'E'], 
    ['I', 'P', 'O', 'F'],    
      ['H', null, 'G']
];

const sortedOrder = boardLayout.flat().filter(letter => letter !== null);

// Create new sorted object based on the order from boardLayout
const sortedTiles = Object.fromEntries(
    sortedOrder.map(letter => [letter, allTiles[letter]])
);

console.log(sortedTiles);
export const chits = [
  { A: 5, dots: 4 },
  { B: 2, dots: 1 },
  { C: 6, dots: 5 },
  { D: 3, dots: 2 },
  { E: 8, dots: 5 },
  { F: 10, dots: 3 },
  { G: 9, dots: 4 },
  { H: 12, dots: 1 },
  { I: 11, dots: 2 },
  { J: 4, dots: 3 },
  { K: 8, dots: 5 },
  { L: 10, dots: 3 },
  { M: 9, dots: 4 },
  { N: 4, dots: 3 },
  { O: 5, dots: 4 },
  { P: 6, dots: 5 },
  { Q: 3, dots: 2 },
  { R: 11, dots: 2 }
]

export const coordinatesList = [
  [
    {harbor: true, row: 0, column: -2},
    {harbor: false, row: 0, column: 0},
    {harbor: true, row: 0, column: 2},
    {harbor: false, row: 1, column: 3},
    {harbor: false, row: 2, column: 4},
    {harbor: false, row: 3, column: 3},
    {harbor: false, row: 4, column: 2},
    {harbor: false, row: 4, column: 0},
    {harbor: false, row: 4, column: -2},
    {harbor: false, row: 3, column: -3},
    {harbor: false, row: 2, column: -4},
    {harbor: false, row: 1, column: -3},
    {harbor: false, row: 1, column: -1},
    {harbor: false, row: 1, column: 1},
    {harbor: false, row: 2, column: 2},
    {harbor: false, row: 3, column: 1},
    {harbor: false, row: 3, column: -1},
    {harbor: false, row: 2, column: -2},
    {harbor: false,row: 2, column: 0}
  ],
  [
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
    { row: 0, column: -2}, 
    { row: 0, column: 0},   
    { row: 1, column: 1},  
    { row: 2, column: 2},  
    { row: 3, column: 1},  
    { row: 3, column: -1}, 
    { row: 2, column: -2}, 
    { row: 1, column: -1},  
    { row: 2, column: 0}
  ],
  [
    { row: 2, column: 4},
    { row: 3, column: 3},
    { row: 4, column: 2}, 
    { row: 4, column: 0},
    { row: 4, column: -2},
    { row: 3, column: -3},
    { row: 2, column: -4},
    { row: 1, column: -3},
    { row: 0, column: -2},
    { row: 0, column: 0},
    { row: 0, column: 2},
    { row: 1, column: 3},
    { row: 2, column: 2},
    { row: 3, column: 1},
    { row: 3, column: -1},
    { row: 2, column: -2},
    { row: 1, column: -1},
    { row: 1, column: 1},
    { row: 2, column: 0}
  ],
  [
    { row: 4, column: 2},  
    { row: 4, column: 0},   
    { row: 4, column: -2}, 
    { row: 3, column: -3},  
    { row: 2, column: -4},  
    { row: 1, column: -3}, 
    { row: 0, column: -2}, 
    { row: 0, column: 0},   
    { row: 0, column: 2},  
    { row: 1, column: 3},  
    { row: 2, column: 4},  
    { row: 3, column: 3},  
    { row: 3, column: 1},  
    { row: 3, column: -1}, 
    { row: 2, column: -2}, 
    { row: 1, column: -1},  
    { row: 1, column: 1},  
    { row: 2, column: 2},  
    { row: 2, column: 0}
  ],
  [
    { row: 4, column: -2},
    { row: 3, column: -3},
    { row: 2, column: -4},
    { row: 1, column: -3},
    { row: 0, column: -2},
    { row: 0, column: 0},
    { row: 0, column: 2},
    { row: 1, column: 3},
    { row: 2, column: 4},
    { row: 3, column: 3},
    { row: 4, column: 2},
    { row: 4, column: 0},
    { row: 3, column: -1},
    { row: 2, column: -2},
    { row: 1, column: -1},
    { row: 1, column: 1},
    { row: 2, column: 2},
    { row: 3, column: 1},
    { row: 2, column: 0}
  ],
  [
    { row: 2, column: -4},
    { row: 1, column: -3},
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
    { row: 2, column: -2},
    { row: 1, column: -1},
    { row: 1, column: 1},
    { row: 2, column: 2},
    { row: 3, column: 1},
    { row: 3, column: -1},
    { row: 2, column: 0}
  ]
]

export const resourceMapper = {
  wood: 4,
  brick: 3,
  sheep: 4,
  wheat: 4,
  stone: 3,
  desert: 1
}

export const harbors = [
  // Top harbors
  { row: 0, column: -2, type: "3:1", rotate: 5 }, // Top-left
  { row: 0, column: 0, type: "3:1", rotate: 0 },  // Top-right
  
  // Right side harbors
  { row: 1, column: 3, type: "3:1", rotate: 1 },  // Right-top
  { row: 3, column: 3, type: "3:1", rotate: 2 },  // Right-bottom
  
  // Bottom harbors
  { row: 4, column: 0, type: "3:1", rotate: 2 },  // Bottom-right
  { row: 4, column: -2, type: "3:1", rotate: 3 }, // Bottom-left
  
  // Left side harbors
  { row: 3, column: -3, type: "3:1", rotate: 4 }, // Left-bottom
  { row: 1, column: -3, type: "3:1", rotate: 4 }, // Left-top
  
  // Additional harbor on the right side
  { row: 2, column: 4, type: "3:1", rotate: 1 },  // Right-middle
]
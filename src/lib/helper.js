export function shuffleArray(array) {  
  for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const randomIndex = Math.floor(Math.random() * (i + 1));
      // Swap the current element with the randomly chosen one
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

export const resources = () => {
  let resourceMapper = {
    wood: 4,
    brick: 3,
    sheep: 4,
    wheat: 4,
    stone: 3,
    dessert: 1 
  }
  let resourcesArray = []
  
  Object.keys(resourceMapper).forEach(resource => {
    let value = resourceMapper[resource]
    for (let i = 0; i < value; i++) {
      resourcesArray = [...resourcesArray, resource]
    }
  })
  return resourcesArray
}

export const gridNumbers = [

  { A: 5 }, 
  { B: 2 }, 
  { C: 6 },  

  { L: 10 },
  { M: 9 },  
  { N: 4 },  
  { D: 3 },

  { K: 8 },  
  { R: 11 },
  { O: 5 },  
  { E: 8 },  

  { J: 4 },  
  { Q: 3 },  
  { P: 6 },
  { F: 10 }, 

  { I: 11 }, 
  { H: 12 },
  { G: 9 },  
]
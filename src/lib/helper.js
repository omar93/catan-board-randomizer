  // Forest 4st = 1
  // brick 3st = 2
  // hö 4st = 3
  // sten 3st = 4
  // öken 1st = 5
  // får 4st = 6
export function shuffleArray(array) {  
  for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const randomIndex = Math.floor(Math.random() * (i + 1));
      // Swap the current element with the randomly chosen one
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

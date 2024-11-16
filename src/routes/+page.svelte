<script>
  import Tile2 from "$lib/Tile2.svelte"
  import { resourceStore, gridNumberStore } from '../lib/stores'
  
  // Initialize stores
  resourceStore.initialize();
  gridNumberStore.initialize();
  
  // Create reactive board grid using store values
  $: boardGrid = [
    // Row 1 (3 tiles)
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },

    // Row 2 (4 tiles)
    { x: -1.5, y: 1 },
    { x: -0.5, y: 1 },
    { x: 0.5, y: 1 },
    { x: 1.5, y: 1 },

    // Row 3 (5 tiles)
    { x: -2, y: 2 },
    { x: -1, y: 2 },
    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },

    // Row 4 (4 tiles)
    { x: -1.5, y: 3 },
    { x: -0.5, y: 3 },
    { x: 0.5, y: 3 },
    { x: 1.5, y: 3 },

    // Row 5 (3 tiles)
    { x: -1, y: 4 },
    { x: 0, y: 4 },
    { x: 1, y: 4 },
  ].map((tile, index) => ({
    ...tile,
    type: $resourceStore[index] || 'empty'
  }));

  // Subscribe to the grid numbers store
  $: gridNumbers = $gridNumberStore;
  
  // Keep track of used numbers
  let usedNumberIndex = 0;
  
  // Function to get next number while avoiding using the same one twice
  function getNextNumber() {
    if (usedNumberIndex >= gridNumbers.length) {
      return {};
    }
    return gridNumbers[usedNumberIndex++];
  }
</script>

<div id="wrapper">
  {#each boardGrid as tile, i}
    {#if tile.type === 'dessert'}
      <Tile2 
        column={tile.x} 
        row={tile.y} 
        img={tile.type} 
        numbers={{Z:0}}
      /> 
    {:else}
      <Tile2 
        column={tile.x} 
        row={tile.y} 
        img={tile.type} 
        numbers={getNextNumber()}
      /> 
    {/if}
  {/each}
</div>

<style>
  #wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 40%;
    margin-top: 7.5%;
  }
</style>
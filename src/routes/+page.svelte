<script>
  import Tile2 from "$lib/Tile2.svelte"
  import { resourceStore, gridNumberStore } from '../lib/stores'
  // import '../lib/startPositionNumbersArrays'
  import '../lib/catan.js'
  
  // Initialize stores
  resourceStore.initialize();
  gridNumberStore.initialize();
  
  // Create reactive board grid using store values
  $: boardGrid = [
    // Row 1 (3 tiles)
    { column: -1, row: 0 },
    { column: 0, row: 0 },
    { column: 1, row: 0 },

    // Row 2 (4 tiles)
    { column: -1.5, row: 1 },
    { column: -0.5, row: 1 },
    { column: 0.5, row: 1 },
    { column: 1.5, row: 1 },

    // Row 3 (5 tiles)
    { column: -2, row: 2 },
    { column: -1, row: 2 },
    { column: 0, row: 2 },
    { column: 1, row: 2 },
    { column: 2, row: 2 },

    // Row 4 (4 tiles)
    { column: -1.5, row: 3 },
    { column: -0.5, row: 3 },
    { column: 0.5, row: 3 },
    { column: 1.5, row: 3 },

    // Row 5 (3 tiles)
    { column: -1, row: 4 },
    { column: 0, row: 4 },
    { column: 1, row: 4 },
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
  <!-- {#each boardGrid as {column, row, img, numbers} }
    {#if tile.type === 'dessert'}
      <Tile2 {column} {row} {img} numbers={{Z:0}}/> 
    {:else}
      <Tile2 {column} {row} {img} {numbers}/> 
    {/if}
  {/each} -->
</div>

<style>
  #wrapper {
    flex: 1;
    display: grid;
    margin-left: 800px;
    margin-top: 200px;
  }
</style>
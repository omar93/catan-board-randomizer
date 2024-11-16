<script>

  import Tile2 from "$lib/Tile2.svelte"

  import { shuffleArray, resources, gridNumbers } from '../../lib/helper.js'

	let mystore = shuffleArray(resources())
  let numbers = gridNumbers.slice()

  let boardGrid = [
    // Row 1 (3 tiles)
    { x: -1, y: 0, type: mystore.pop() },
    { x: 0, y: 0, type: mystore.pop() },
    { x: 1, y: 0, type: mystore.pop() },

    // Row 2 (4 tiles)
    { x: -1.5, y: 1, type: mystore.pop() },
    { x: -0.5, y: 1, type: mystore.pop() },
    { x: 0.5, y: 1, type: mystore.pop() },
    { x: 1.5, y: 1, type: mystore.pop() },

    // Row 3 (5 tiles)
    { x: -2, y: 2, type: mystore.pop() },
    { x: -1, y: 2, type: mystore.pop() },
    { x: 0, y: 2, type: mystore.pop() },
    { x: 1, y: 2, type: mystore.pop() },
    { x: 2, y: 2, type: mystore.pop() },

    // Row 4 (4 tiles)
    { x: -1.5, y: 3, type: mystore.pop() },
    { x: -0.5, y: 3, type: mystore.pop() },
    { x: 0.5, y: 3, type: mystore.pop() },
    { x: 1.5, y: 3, type: mystore.pop() },

    // Row 5 (3 tiles)
    { x: -1, y: 4, type: mystore.pop() },
    { x: 0, y: 4, type: mystore.pop() },
    { x: 1, y: 4, type: mystore.pop() },
  ]
  
</script>

<div id="wrapper">
  {#each boardGrid as tile, i}
    {#if tile.type === 'dessert'}
      <Tile2 column={tile.x} row={tile.y} img={tile.type} numbers={{Z:7}}/> 
      {:else}
      <Tile2 column={tile.x} row={tile.y} img={tile.type} numbers={gridNumbers.slice().pop() || {}}/> 
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

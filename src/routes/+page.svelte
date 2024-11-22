<script>
  import Tile from "$lib/Tile.svelte"
  import Hexagon from "$lib/hexagon.svelte";
  import { tiles } from "$lib/catan.js"
      
</script>

<div id="wrapper">
  {#each $tiles as {row, column, resource, chit}, i}
      {#if resource != 'desert'}
        <Tile row={row} {column} {resource} {chit}/>
      {:else}
        <Tile row={row} {column} {resource}/>
      {/if}
  {/each}
  <!-- <div id="tile">
    <Hexagon/>
    
  </div>
  <Tile/> -->
</div>

<style>
  :global(*) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  :global(body) {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #wrapper {
    flex: 1;
    margin-left: 45%;
    margin-top: 0%;
  }

  #tile {
    margin-right: 500px;
  }
</style>
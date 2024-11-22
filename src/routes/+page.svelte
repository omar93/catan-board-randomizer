<script>
  import Tile from "$lib/Tile.svelte"
  import { tiles } from "$lib/boardGenerator.js"
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
    background-color: aqua;
  }

  #wrapper {
    flex: 1;
    margin-left: 45%;
    margin-top: 0%;
  }
</style>
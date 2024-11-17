<script>
  import Tile from "$lib/Tile.svelte"
  import { tiles } from "$lib/catan.js"
</script>

<div id="wrapper">
  {#each $tiles as {row, column, resource}}
  <Tile row={row} {column} {resource}/>
  {/each}

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
    background-color: rgb(97, 92, 92);
  }
</style>
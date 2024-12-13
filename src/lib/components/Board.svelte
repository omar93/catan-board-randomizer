<script>
  import Tile from "$lib/components/Tile.svelte"
  import Harbor from "./Harbor.svelte"
  import HarborTile from "./HarborTile.svelte"
  import { tiles } from "$lib/boardGenerator.js"
  
</script>

<div id="wrapper">
  {#each $tiles as {row, column, resource, chit, harbor} }
      {#if resource != 'desert'}
      <div id="korv">
        <Tile {row} {column} {resource} {chit} {harbor}/>
      </div>
        {:else}
        <div id="korv">
          <Tile {row} {column} {resource} {harbor}/>
        </div>
      {/if}
  {/each}

</div>

<style>
#wrapper {
  flex: 1;
  margin-left: 45%;
  margin-top: 2%;
  background-color: aqua;
}
</style>
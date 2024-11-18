<script>
  import Tile from "$lib/Tile.svelte"
  
  import { tiles } from "$lib/catan.js"
  import { order } from "$lib/startingPositions"

  console.log("order:",order);
  

</script>

<ul>
  {#each order as order,i}
    <li>{order} - {$tiles[i].resource}</li>
  {/each}
</ul>
<div id="wrapper">
  {#each $tiles as {row, column, resource}}
    {#if resource != 'dessert'}
      <Tile row={row} {column} {resource} number={order.shift()}/>
    {:else}
      <Tile row={row} {column} {resource} number={0}/>
    {/if}
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

  ul {
    position: absolute;
    font-size: large;
  }

  li {
    margin-top: 10px;
  }

  #wrapper {
    flex: 1;
    margin-left: 45%;
    margin-top: 0%;
  }
</style>
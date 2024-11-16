<script>
  import Tile from "$lib/Tile.svelte"
</script>

<div id="wrapper">

  <div id="row1" class="row">
    {#each {length: 3} as _, i}
      <Tile pointTop={(i % 2 === 0) ? true : false} id={i+1} row={3}/> 
    {/each}
  </div>

  <div id="row2" class="row">
    {#each {length: 4} as _, i}
      <Tile pointTop={(i % 2 === 0) ? true : false} id={i+1} row={4}/> 
    {/each}
  </div>

  <div id="row3" class="row">
    {#each {length: 5} as _, i}
      <Tile pointTop={(i % 2 === 0) ? true : false} id={i+1} row={5}/> 
    {/each}
  </div>

  <div id="row4" class="row">
    {#each {length: 4} as _, i}
      <Tile pointTop={(i % 2 === 0) ? true : false} id={i+1} row={4}/> 
    {/each}
  </div>

  <div id="row5" class="row">
    {#each {length: 3} as _, i}
      <Tile pointTop={(i % 2 === 0) ? true : false} id={i+1} row={3}/> 
    {/each}
  </div>

</div>

<style>
  #wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 22.5%;
    margin-top: -5%;
  }

  #wrapper > div {
    margin-top: 75px;
  }

  .row {
    position: relative;
  }
</style>

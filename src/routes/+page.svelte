<script>
  import Board from "$lib/components/Board.svelte";
</script>

<Board/>

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
</style>
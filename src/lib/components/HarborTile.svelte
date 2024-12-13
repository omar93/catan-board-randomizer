<script>
  const { column, row, resource, chit, size = 260, id, harbor } = $props()

  console.log(harbor);
  
  
  let number = chit ? Object.values(chit)[0] : 0
  let letter = chit ? Object.keys(chit)[0] : 0
  
  const left = (column/2) * size*0.88
  const top = row * (size * 0.75)

  const textLeft = left+80
  const textTop = top+80
  
  
</script>

{#if number != 0}
  <div id="chit"
    style="position: absolute; 
      margin-left:{textLeft}px; 
      margin-top:{textTop}px;">
    <span class={number === 6 || number === 8 ? "red" : ""}>{number}</span>
    <div id="dots-wrapper">
      {#each new Array(chit.dots) as dot}
        <span class="dot">{dot}</span>
      {/each}
    </div>
  </div>
{/if}


<svg viewBox="0 0 100 100" id="hexagon" 
     style="position: absolute; 
            margin-left:{left}px; 
            margin-top:{top}px;
            width:{size}px;
            height:{size}px">

  <!--Hexagon-->
  <defs>
    <clipPath id="hexagon-clip">
      {#if harbor}
      <path id="hexagon"
        d="
          M 50 0
          L 93.3 25
          L 93.3 75
          L 50 100
          L 6.7 75
          L 6.7 25
          Z
          M 0 0
          L 10 10
          "
        />
        {:else}
        <path id="hexagon"
        d="
          M 50 0
          L 93.3 25
          L 93.3 75
          L 50 100
          L 6.7 75
          L 6.7 25
          Z
          "
        />
      {/if}
    </clipPath>
  </defs>

  <!--Image-->
  <image
    href="brick.png"
    x="0"
    y="0"
    width="100"
    height="100"
    preserveAspectRatio="xMidYMid slice"
    clip-path="url(#hexagon-clip)"
  />

  <!--Outline X, Y-->
  {#if harbor}
    <path
    d="
      M 50 0
      L 93.3 25
      L 93.3 75
      L 50 100
      L 6.7 75
      L 6.7 25
      Z
      M 6.7 -10
      L 6.7 25
      M 6.7   0
      L 50  0
      Z
      "
      fill="none"
      stroke="black"
      stroke-width="2"
    />
    {:else}
    <path
    d="
      M 50 0
      L 93.3 25
      L 93.3 75
      L 50 100
      L 6.7 75
      L 6.7 25
      Z"
      fill="none"
      stroke="black"
      stroke-width="2"
    />
  {/if}

</svg>

<style>
  #chit {
    width: 100px;
    height: 100px;
    background-color: wheat;
    border-radius: 10rem;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 50px;
    font-family: sans-serif;
  }

  .red {
    color: red;
  }

  #dots-wrapper {
    display: flex;
    justify-content: space-evenly;
    width: 70%;

  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 10rem;
    border: 1px solid black;
    background-color: black;
  }

</style>
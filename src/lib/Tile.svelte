<script>
  let { column, row, resource, numbers } = $props()

  let left = 100 * column;
  let top = 75 * row;

  let leftText = left+25
  let topText = top+25

  let keys = numbers ? Object.keys(numbers) : [];

</script>

<div id="number" style="position: absolute; margin-left:{leftText}px; margin-top:{topText}px;">
  <!-- <span>{column}</span> -->
  <!--Section for dots under number-->
  <!-- <div id="dots-wrapper">
  {#each new Array(5) as _, i}
    <div class="dots"></div>
    {/each}
  </div> -->
  <!-- <span>{numbers[Object.keys(numbers)]}</span> -->
</div>

<svg viewBox="0 0 100 100" id="hexagon" 
style="position: absolute; margin-left:{left}; margin-top:{top}; z-index: -1">

  <!--Hexagon-->
  <defs>
    <clipPath id="hexagon-clip">
      <path id="hexagon"
        d="
          M 50 0
          L 0 25
          L 0 75
          L 50 100
          L 100 75
          L 100 25"
      />
    </clipPath>
  </defs>

  <!--Image-->

  <image
    href="{resource}.png"
    x="0"
    y="0"
    width="100"
    height="100"
    preserveAspectRatio="xMidYMid slice"
    clip-path="url(#hexagon-clip)"
  />

  <!--Outline-->
  <path
    d="
    M 50 0
    L 0 25
    L 0 75
    L 50 100
    L 100 75
    L 100 25
    Z"
    fill="none"
    stroke="black"
  />
</svg>

<style>
  svg {
    width: 100px;
    height: 100px;
  }

  #number {
    background-color: wheat;
    width: 50px;
    height: 50px;
    border-radius: 5rem;
    display: grid;
    align-items: center;
  }
  #number > span {
    margin-left: 20px;
  }
</style>
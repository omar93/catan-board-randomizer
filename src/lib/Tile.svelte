<script>
  let { pointTop, id, row, img } = $props()
  
  const isEven = () => {
    return id % 2 == 0
  }

  let adjuster = $derived(row === 3 ? 50 : row === 5 ? -50 : 0);
  let left = $derived(50*id*2+adjuster)
  let top = $derived(75)

  let leftText = $derived(left+35)
  let topText = $derived(110)

</script>

<div id="number" style="position: absolute; z-index:5; margin-left:{leftText}px; margin-top:{topText}px;">
  <span>{id}</span>
</div>

<svg viewBox="0 0 100 100" id="hexagon" 
style="position: absolute; margin-left:{left}; margin-top:{top};">

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
    href="{img}.png"
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
    color: white;
    background-color: red;
    width: 30px;
    height: 30px;
    border-radius: 5rem;
    text-align: center;
    display: grid;
    align-items: center;
    font-family: sans-serif;
    font-size: 1rem;
  }
</style>
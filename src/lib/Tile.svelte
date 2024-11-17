<script>
  const { column, row, resource, number, size = 270 } = $props()
  
  const left = column * size
  const top = row * (size * 0.75)

  const textLeft = left+120
  const textTop = top+100
  
</script>

<span
style="position: absolute; 
  margin-left:{textLeft}px; 
  margin-top:{textTop}px;"
  >
  {number}
</span>

<svg viewBox="0 0 100 100" id="hexagon" 
     style="position: absolute; 
            margin-left:{left}px; 
            margin-top:{top}px;
            width:{size}px;
            height:{size}px">

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
    /* Remove fixed width/height from CSS */
    width: 100%;
    height: 100%;
  }

  span {
    z-index: 1;
    font-size: 50px;
    font-family: sans-serif;
  }
</style>
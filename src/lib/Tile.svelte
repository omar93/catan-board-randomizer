<script>
  let { column, row, resource, size = 270 } = $props()
  
  let left = column * size
  let top = row * (size * 0.75)
</script>

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
</style>
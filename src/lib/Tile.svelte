<script>
  let { pointTop, id, row, img } = $props()

  const isEven = () => {
    return id % 2 == 0
  }

  let adjuster = $derived(row === 3 ? 50 : row === 5 ? -50 : 0);
  let left = $derived(50*id*2+adjuster)
  let top = $derived(75)


  
  
  //<polygon points="25 0, 0 50, 25 100, 75 100, 100 50, 75 0" stroke="black" fill="white"/>
  // X , Y

</script>
<svg viewBox="0 0 100 100" id="hexagon" style="position: absolute; margin-left:{left}; margin-top:{top};" class={id%2==0 ? "even" : "odd"}>

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
</style>
<script>

  const { size = 270, resource} = $props()
  
  const h = $state(size);
  const w = $state(size * 0.866); // cos(30°) * size
  
  const points = $derived(calculatePoints(size))
   
  function calculatePoints(size) {
    return [
      `${w/2},0`,      // top
      `${w},${h/4}`,   // top right
      `${w},${h*3/4}`, // bottom right
      `${w/2},${h}`,   // bottom
      `0,${h*3/4}`,    // bottom left
      `0,${h/4}`       // top left
    ].join(' ');
  }
</script>

<svg width={w} height={h}>
  <defs>
    <pattern id="bg-pattern" patternUnits="userSpaceOnUse" width="100%" height="100%">
      <image href="{resource}.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"/>
    </pattern>
  </defs>
  <polygon {points} fill="url(#bg-pattern)" />
</svg>
<script>
  const { row, column, type, rotate = 0, size = 260 } = $props()
  
  // Calculate base position similar to hex tiles
  const left = (column/2) * size*0.88 + 30
  const top = row * (size * 0.75) + 30

  // Calculate harbor position based on rotation
  // The harbor should be centered on the hex edge and rotated appropriately
  const getHarborPosition = (rotation) => {
    // Center point of the hex
    const centerX = 50
    const centerY = 50
    
    // Length from center to edge middle (86.6 = 100 * cos(30°))
    const radius = 86.6
    
    // Calculate position based on rotation angle
    const angle = (rotation * 60 - 30) * (Math.PI / 180)
    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)
    
    return { x, y }
  }

  const position = getHarborPosition(rotate)
</script>

<svg viewBox="0 0 100 100"
     style="position: absolute; 
            margin-left:{left}px; 
            margin-top:{top}px;
            width:{size}px;
            height:{size}px;
            pointer-events: none;">
            
  <!-- Harbor rectangle -->
  <rect 
    x={position.x - 10} 
    y={position.y - 2.5}
    width="20" 
    height="5"
    fill="brown"
    transform={`rotate(${rotate * 60} ${position.x} ${position.y})`}
  />
</svg>

<style>
  svg {
    z-index: 2;
  }
</style>
//need to refactor to be readable
function draw(){
  
  const canvas = document.getElementById('canvas')
  if(canvas.getContext('2d')){// check if getContext is supported from browsers
    let context = canvas.getContext('2d')
    let x = 50//Math.floor(Math.random()*100)
    let y = 50//Math.floor(Math.random()*100)
    let speed = 1
    let down = 0

    function drawRect(){
      context.clearRect(0,0,innerWidth,1000)
      context.fillStyle = 'red'
      context.fillRect(x,y,10,10)
    }
    
    drawRect()

    document.addEventListener('keydown',function(e){
      function animate(){
        window.requestAnimationFrame(animate)
        drawRect()
        if(e.key === 'ArrowDown'){
          
          y+=speed
          if(y + 10 > 400){
            y--
          }
          down++
        }
        else if(e.key === 'ArrowRight'){
         
          x+=speed
          if(x+10>500){
            x--
          }
        }
        else if(e.key === 'ArrowUp'){
          
          y-= speed
          if(y<0){
            y++
          }
        }
        else if(e.key === 'ArrowLeft'){
          
          x-=speed
          if(x<0){
            x++
          }
        }

      }
      animate()
      
    })
    
  }
  else {
    console.log('canvas unsupported')

}

}
window.addEventListener('load',draw)


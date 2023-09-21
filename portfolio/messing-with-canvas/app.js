const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')


canvas.width = window.innerWidth   
canvas.height = window.innerHeight
/*
c.fillStyle = 'red'// kailangan mauna to bago yung fillRect
//create rectangle
        //  x   y   w   h
c.fillRect(100,100,100,100)
c.fillRect(100,500,100,100)
c.fillRect(400,200,100,100)

console.log(canvas)

//create a line

c.beginPath()//start the path
//     takes x,y coordinates
c.moveTo(50,300)//start the path from
c.lineTo(300,100)//draw the line to
c.lineTo(500,300)
c.lineTo(500,300)
c.strokeStyle = 'black'// change color of the line
c.stroke()

//create arc
//args are x,y,radiant,startAngle,endAngle,drawCounterClockwise(bool)
c.beginPath()
c.arc(300,300,50,0,Math.PI*2,false)//
c.stroke()

for(let x=0;x<3;x++){
  let x = Math.random()* window.innerWidth;
  let y = Math.random()* window.innerHeight
  c.beginPath()
c.arc(x,y,50,0,Math.PI*2,false)//
c.strokeStyle = 'brown'
c.stroke()
}*/

//animation
let x = Math.random()* window.innerWidth;
let y = Math.random()* window.innerHeight;

let dx =4 //x velocity or speed
let dy =1//y velocity or speed
let radius = 50
function animate(){
  requestAnimationFrame(animate)//kaya tinawag yung function kas recursive xa
 
  
  c.clearRect(0,0,innerWidth,innerHeight)//delete the previous circle
 
  c.beginPath()
  c.arc(x,y,radius,0,Math.PI*2,false)//
  c.strokeStyle = "black"
  c.stroke()
 
  if(x + radius > innerWidth || x - radius < 0){//bounce back
    dx = -dx
  }
  if(y + radius > innerHeight || y - radius < 0 ){
    dy= - dy
  }
 x+=dx
 y+=dy
}

animate()
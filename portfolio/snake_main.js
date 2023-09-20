const container = document.getElementById('container')

//make 100 divs
for(let x = 0;x<100;x++){
  const div = document.createElement('div');
  //div.textContent = x+1
  div.className = "block"
  container.appendChild(div)
}


  
  let body = document.querySelectorAll('.block')
  let currentIndex =44-1
  body[currentIndex].style.backgroundColor = "black"

  move()
  
  addObstacle()


function move(){

      document.addEventListener('keydown',function(event){
      if(event.key==='ArrowRight'){
       
        body[currentIndex].style.backgroundColor = ''
        currentIndex++
        body[currentIndex].style.backgroundColor = "black"
        //console.log(`index: ${currentIndex+1}`)
        collisionRight()
        
      }
      else if(event.key ==='ArrowLeft'){
        body[currentIndex].style.backgroundColor = ''
        currentIndex--
        body[currentIndex].style.backgroundColor = 'black'
        console.log(currentIndex+1)
        collisionLeft()
      }
      else if(event.key ==='ArrowUp'){
        body[currentIndex].style.backgroundColor = ''
        currentIndex-=10
        body[currentIndex].style.backgroundColor = 'black'
        console.log(currentIndex+1)
        collisionTop()
      }
      else if(event.key ==='ArrowDown'){
        body[currentIndex].style.backgroundColor = ''
        currentIndex+=10
        body[currentIndex].style.backgroundColor = "black"
        console.log(currentIndex+1)
        collisionBot()
      }
  })
 
  
}


function collisionRight(){
  if(body[currentIndex].classList.contains('obstacle')){
    console.log('dead')
    body[currentIndex].style.backgroundColor = "red"
    body[currentIndex-1].style.backgroundColor = "black"
    
  }
}

function collisionLeft(){
  if(body[currentIndex].classList.contains('obstacle')){
    console.log('dead')
    body[currentIndex].style.backgroundColor = "red"
    body[currentIndex+1].style.backgroundColor = "black"
    
  }
}
function collisionBot(){
  if(body[currentIndex].classList.contains('obstacle')){
    console.log('dead')
    body[currentIndex].style.backgroundColor = "red"
    body[currentIndex-10].style.backgroundColor = "black"
    
  }
}
function collisionTop(){
  if(body[currentIndex].classList.contains('obstacle')){
    console.log('dead')
    body[currentIndex].style.backgroundColor = "red"
    body[currentIndex+10].style.backgroundColor = "black"
    
  }
}

function addObstacle(){
  for(let x = 0;x<10;x++){
    body[x].classList.add('obstacle')
  }
  for(let y = 10;y<91;y+=10){
    body[y].classList.add('obstacle')
  }
  for(let z = 91;z<100;z++){
    body[z].classList.add('obstacle')
  }
  for(let w = 19;w<90;w+=10){
    body[w].classList.add('obstacle')
  }
}
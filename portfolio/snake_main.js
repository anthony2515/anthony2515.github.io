const container = document.getElementById('container')

//make 100 divs
for(let x = 0;x<100;x++){
  const div = document.createElement('div');
  //div.textContent = x+1
  div.className = "block"
  container.appendChild(div)
}


  
  let body = document.querySelectorAll('.block')
  let currentIndex = 55-1
  body[currentIndex].style.backgroundColor = "black"




function move(){
  document.addEventListener('keydown',function(event){
      if(event.key==='ArrowRight'){
    
        body[currentIndex].style.backgroundColor = ''
        currentIndex++
        body[currentIndex].style.backgroundColor = "black"
        console.log(currentIndex+1)
      }
      else if(event.key ==='ArrowLeft'){
        body[currentIndex].style.backgroundColor = ''
        currentIndex--
        body[currentIndex].style.backgroundColor = 'black'
        console.log(currentIndex+1)
      }
      else if(event.key ==='ArrowUp'){
        body[currentIndex].style.backgroundColor = ''
        currentIndex-=10
        body[currentIndex].style.backgroundColor = 'black'
        console.log(currentIndex+1)
      }
      else if(event.key ==='ArrowDown'){
        body[currentIndex].style.backgroundColor = ''
        currentIndex+=10
        body[currentIndex].style.backgroundColor = "black"
        console.log(currentIndex+1)
      }
  })
}
move()
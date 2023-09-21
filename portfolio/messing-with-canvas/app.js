const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')
canvas.style.background = 'red'


canvas.width = window.innerWidth   
canvas.height = window.innerHeight

//create rectangle
        //  x   y   w   h
c.fillRect(100,100,100,100)
c.fillRect(100,500,100,100)
c.fillRect(400,200,100,100)



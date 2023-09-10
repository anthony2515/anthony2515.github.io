
const buttons = document.querySelectorAll(".contents")
const name = document.querySelector(".name")
const container = document.querySelector(".contents_container")
const intro = document.querySelector(".intro")
const whoami = document.querySelector(".whoami")
const home = document.querySelector(".home")
const buttonste = document.querySelectorAll(".te")


home.addEventListener('click',function(){


  container.classList.toggle("move_back")
  intro.classList.toggle("move_intro_back")
  whoami.classList.toggle("whoami_move_back")
  
  setTimeout(function(){
  const filePath = '../index.html';
  
  window.location.href = filePath;
},200)
})
buttons[0].addEventListener('click', function() {
  container.classList.toggle("move")
  intro.classList.toggle("move_intro")
  whoami.classList.toggle("whoami_move")
  console.log("clicked");
  setTimeout(function(){
  const filePath = 'blog/te-houtaewa-template.html';
  
  window.location.href = filePath;
},200)
});

buttons[1].addEventListener('click', function() {
  container.classList.toggle("move")
  intro.classList.toggle("move_intro")
  whoami.classList.toggle("whoami_move")
  console.log("clicked");
  setTimeout(function(){
  const filePath = 'blog/flexbox.html';
  window.location.href = filePath;
},200)


 
});
buttons[2].addEventListener('click', function() {
  container.classList.toggle("move")
  intro.classList.toggle("move_intro")
  whoami.classList.toggle("whoami_move")
  console.log("clicked");
  setTimeout(function(){
  const filePath = 'blog/identity-values-strength.html';
  window.location.href = filePath;
},200)

});

buttons[3].addEventListener('click', function() {
  container.classList.toggle("move")
  intro.classList.toggle("move_intro")
  whoami.classList.toggle("whoami_move")
  console.log("clicked");
  setTimeout(function(){
  const filePath =  'blog/learning-plan.html';
  window.location.href = filePath;
},200)


});



buttonste[0].addEventListener('click', function() {
 
  const filePaths = 'te-houtaewa-template.html';
  window.location.href = filePaths;



 
});
buttonste[1].addEventListener('click', function() {
 
  const filePaths = 'flexbox.html';
  window.location.href = filePaths;



 
});
buttonste[2].addEventListener('click', function() {
 
  const filePaths = 'identity-values-strength.html';
  window.location.href = filePaths;



 
});
buttonste[3].addEventListener('click', function() {
 
  const filePaths = 'learning-plan.html';
  window.location.href = filePaths;
});

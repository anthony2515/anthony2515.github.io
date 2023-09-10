
const buttons = document.querySelectorAll(".contents")
const name = document.querySelector(".name")
const container = document.querySelector(".contents_container")
const intro = document.querySelector(".intro")
const whoami = document.querySelector(".whoami")
const home = document.querySelector(".home")
const buttonste = document.querySelectorAll(".te")
const flex = document.querySelectorAll(".flex")
const learning = document.querySelectorAll(".learning")
const identity = document.querySelectorAll(".identity")

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
/*
flex[0].addEventListener('click', function() {
 console.log("clicked")
  const flexPath = '../te-houtaewa-template.html';
  window.location.href = flexPath;



 
});
flex[1].addEventListener('click', function() {
 
  const flexPath = 'flexbox.html';
  window.location.href = flexPath;



 
});
flex[2].addEventListener('click', function() {
 
  const flexPath = 'identity-values-strength.html';
  window.location.href = flexPath;



 
});
flex[3].addEventListener('click', function() {
 
  const flexPath = 'learning-plan.html';
  window.location.href = flexPath;



 
});

identity[0].addEventListener('click', function() {
 
  const identityPath = 'te-houtaewa-template.html';
  window.location.href = identityPath;



 
});
identity[1].addEventListener('click', function() {
 
  const identityPath = 'flexbox.html';
  window.location.href = identityPath;



 
});
identity[2].addEventListener('click', function() {
 
  const identityPath = 'identity-values-strength.html';
  window.location.href = identityPath;



 
});
identity[3].addEventListener('click', function() {
 
  const identityPath = 'learning-plan.html';
  window.location.href = identityPath;



 
});

learning[0].addEventListener('click', function() {
 
  const learningPath = 'te-houtaewa-template.html';
  window.location.href = learningPath;



 
});
learning[1].addEventListener('click', function() {
 
  const learningPath = 'flexbox.html';
  window.location.href = learningPath;



 
});
learning[2].addEventListener('click', function() {
 
  const learningPath = 'identity-values-strength.html';
  window.location.href = learningPath;



 
});
learning[3].addEventListener('click', function() {
 
  const learningPath = 'learning-plan.html';
  window.location.href = learningPath;



 
});

*/

const myElement = document.querySelector('.te');
if (myElement) { // Check if the element exists
  myElement.addEventListener('click', function() {
    // Your event handling code here
  });
} else {
  console.log('Element not found.');
}
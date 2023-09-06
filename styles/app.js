const tehoutaewa = document.querySelector('.tehoutaewa')
const sprintOne = document.querySelector('.one')
const mainContainer = document.querySelector('section')

let isContentAdded = false;
tehoutaewa.addEventListener('click', function () {
  if(!isContentAdded){
    mainContainer.textContent=""
  const complexHTML = `
  
  <h1 class="heading" 
      style="color:rgb(25, 105, 172);
      text-align: center;">
      The Story of Te Houtaewa</h1>

    <h2>E kore e mau i a koe, he wae kai pakiaka. <em>A foot accustomed to running over roots makes the speediest runner.</em> </h2>
    <h3>10 November 2010</h3>
    
    <p>
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbspTe Houtaewa was the fastest runner of his day and played many pranks on his peoples enemies. One morning his mother wanted kumara for the hangi (earth oven) and asked Te Houtaewa to go to the gardens at Te Kao, a short distance away. He agreed to fetch the kumara and told his mother to prepare the hangi.
    </p>
    <p>
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbspInstead of going to the nearby gardens, Te Houtaewa set off for Ahipara as he wanted to annoy some Te Rarawa people who lived there. Carrying two large baskets for the kumara, he ran like the wind, completing the journey over the hard sands of Te Oneroa a Tohe (Ninety Mile Beach) in the few hours it takes a good hangi to heat up properly. On reaching Ahipara, he went straight to the people's kumara pataka (storehouse for the sweet potatoes) situated at the foot of the hill Whangatauatia.
    </p>
    <p>
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp While Te Houtaewa was filling his baskets with kumara he was spotted stealing the kai (food). He was immediately recognised.
    </p>
    
  </div>
  `;


  mainContainer.insertAdjacentHTML('beforeend', complexHTML);
  isContentAdded = true; 
  }
})


sprintOne.addEventListener('click',function(){
  isContentAdded=false;
  mainContainer.textContent=""
  const flexbox = `
  <h1>What is flex box?</h1>
  <p>Flex box is a container where you can align the contents inside of it using various properties like:</p>
  <ul>
    <li>flex-direction</li>
    <li>justify-content</li>
    <li>align-items</li>
    <li>align-content</li>
    <li>align-self</li>
  </ul>
  <h1>Demonstration</h1>
  <p>Heres what it looks like if you have'nt set display:flex on the container
  <br>
  <img class = "untitled" src="image/Untitled.png">
  <p>The red squares are the <strong>contents</strong> and the pink rectangle is the <strong>main container</strong> 
  <br>
  <img src = "image/image1.png">
  <br>
  <p>Now we add display:flex</p>
  <img src = "image/code2.png">
  <h2>And TADAAAA!!</h2>
  <img src = "image/image2.png">
  <h3>The contents are align in rows by default. So you dont need to put flex-direction:row as the position of the contents are already align in row</h3>
  <h2>flex-direction</h2>
  <p>flex-direction have values that you can use to align the contents of the container which is:</p>
  <ul>
    <li>flex-direction:row;<br>
      <ul><li>align the contents in row</li></ul>
    <li>flex-direction:row-reverse;</li>
    <ul><li>align the contents in row but in reverse order</li></ul>
    <li>flex-direction:column;</li>
    <ul><li>align the contents in column</li></ul>
    <li>flex-direction:column-reverse;</li>
    <ul><li>align the contents in column but in reverse order</li></ul>
  </ul>
  <h1>justify-content</h1>
  <p>Since we got the taste of using display:flex. I wanna show you this picture below. Flexbox is using an imaginary line where the horizontal line that you see is called the main axis and the vertical line is called the cross axis.
  We will be using each line as the guidelines for each flex properties </p>
  <img src="image/image3.png">

  <p>The flex property called justify-content, aligns the contents relative to the main axis just like the image shown below</p>
  <p>If we put justify-content:flex-start; the contents will go to the starting point of the main axis
  <img src = "image/image4.png">
  <p>and when we set justify-conte:flex-end; the contents will go to the end point of the main axis
  <img src = "image/image5.png">
  <h1>align-items</h1>
  <p> The flex property called align-items, aligns the contents relative to the cross axis.</p>
  <p> As you can see in the code below </p>
  <img src = "image/image7.png">
  <p>we set justify-content:flex-end to move the contents to the end of the main axis</p>
  <p> and we set align-items:flex-end to move the contents to the end of the <strong>cross-axis</strong></p>
  <img src = "image/image6.png">
  `;
  mainContainer.insertAdjacentHTML('beforeend',flexbox)
})
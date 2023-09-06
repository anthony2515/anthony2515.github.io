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
  <h2>flex-direction</h2>
  <p>flex-direction have values that you can use to align the contents of the container which is:</p>
  <ul>
    <li>flex-direction:row;<br>
      <img src = "image/Untitled1.png"></li>
    <li>flex-direction:row-reverse;</li>
    <li>flex-direction:column;</li>
    <li>flex-direction:column-reverse;</li>
  </ul>
  `;
  mainContainer.insertAdjacentHTML('beforeend',flexbox)
})
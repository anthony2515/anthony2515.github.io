const text = document.querySelector('input')
const button = document.querySelector('button')
const textArea = document.querySelector('textarea')
const ones = ['','one','two','three','four','five','six','seven','eight','nine']
//const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eigthteen','nineteen']
const tens = ['','','twenty ','thirty ','fourty ','fifty ','sixty ','seventy ','eighty ','ninety ']
button.addEventListener('click',function(){
  let input = parseInt(text.value)
  textArea.value = convert(input)

  function convert(number){
    
    if(number<10){
      return ones[number]
    }
    else if(number > 9 && number < 20){
      if(number ===10){
          return "ten"
      }
      else if(number ===11){
          return "eleven"
      }
      else if(number ===12){
          return "twelve"
      }
      else if(number ===13){
          return "thirteen"
      }
      else if(number == 15){
          return "fifteen"
      }
      else if(number ===18){
          return "eigthteen"
      }
      else{
          return h1.textContent = `${ones[number - 10]}teen`
      }
    }
    else if(number<100){//tens
      return tens[Math.floor(number/10)]+ones[number%10]
    }
    else if(input<1000){//hundreds
      return `${ones[Math.floor(number/100)]} hundred ${convert(number%100)}`
    }
    else if(input<10000){//thousands
      return `${ones[Math.floor(number/1000)]} thousand ${convert(number%1000)}`
    }
    else{
      return 'out of range'
    }
  }

 
 
  
  
})


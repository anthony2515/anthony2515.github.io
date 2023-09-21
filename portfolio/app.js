const text = document.querySelector('input')
const button = document.querySelector('button')
const textArea = document.querySelector('textArea')
const ones = ['','one','two','three','four','five','six','seven','eight','nine']
const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eigthteen','nineteen']
const tens = ['','ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety']


button.addEventListener('click',function(){

  let input = parseInt(text.value)
  textArea.value = convert(input)

})

function convert(number){
    
  if(number<10){
    return ones[number]
  }
  else if(number < 20){
    return teens[number%10]
  }
  else if(number<100){//tens
    return `${tens[Math.floor(number/10)]} ${ones[number%10]}`
  }
  else if(number<1000){//hundreds
   return `${ones[Math.floor(number/100)]} hundred ${convert(number%100)}`
  }
  else if(number<10000){//thousands
    return `${ones[Math.floor(number/1000)]} thousand ${convert(number%1000)}`
  }
  else if(number<100000){//10 thousand
    return `${convert(Math.floor(number/1000))} thousand ${convert(number%1000)}`
  }
  else if(number<1000000){//100 thousand
    return `${ones[Math.floor(number/100000)]} hundred ${convert(number%100000)}`
  }
  else{
    return 'out of range'
  }
}


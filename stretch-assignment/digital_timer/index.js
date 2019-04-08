

const digits = document.querySelector('.digits').children
console.log(digits)
let onesSecondsCounter = 0;
let milliTSecondCounter = 0;
let milliHSecondCounter = 0;



window.setInterval(function(){
    if(onesSecondsCounter < 9){
    digits[0].style.color = 'black'
    digits[1].style.color = 'black'
    digits[3].style.color = 'black'
    digits[4].style.color = 'black'
    digits[1].textContent = onesSecondsCounter +=1 
    digits[0].textContent = 0;
    }
    else if(onesSecondsCounter >= 9 ){
    digits[0].style.color = 'red'
    digits[1].style.color = 'red'
    digits[3].style.color = 'red'
    digits[4].style.color = 'red'
    digits[0].textContent = 1;
    digits[1].textContent = 0;
    onesSecondsCounter = 0 
    }
   
},1000)

window.setInterval(function(){
    if(milliHSecondCounter < 9){
    digits[4].textContent = milliHSecondCounter +=1
    digits[3].textContent = 0;

    }
    else if(milliHSecondCounter >= 9){
        digits[3].textContent = 1
        digits[4].textContent = 0
        milliHSecondCounter = 0
     }
},100)
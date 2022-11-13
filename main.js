const display = document.querySelector('.password')
const length = document.querySelector('.passwordLength')
const strength = document.querySelector('.diff')
const firstLevel = document.querySelector('.levelOne')
const secondLevel = document.querySelector('.levelTwo')
const thirdLevel = document.querySelector('.levelThree')
const fourthLevel = document.querySelector('.levelFour')
const clipboard = document.getElementById('clipboard')
const slider = document.querySelector('.slider')
const includeUppercase = document.getElementById('uppercase')
const includeNumbers= document.getElementById('numbers')
const includeSymbols = document.getElementById('symbols')
const generate= document.querySelector('.test')
const h3 = document.querySelector('h3')
const h1 = document.querySelector('h1')
let numbers = [0,1,2,3,4,5,6,7,8,9]
let characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let symbols = ['@','#','$','%','^','&','*','(',')','_','+','?','<','>',':','{','}','[',']']




length.addEventListener('input', numberSync)
slider.addEventListener('input', numberSync)

function numberSync(e){
    const value = e.target.value
    length.value = value
    slider.value = value
}

generate.addEventListener('click', tooShort)

function tooShort(){
    if(length.value <= 7) h3.classList.remove('hidden')
    if(length.value > 7) h3.classList.add('hidden')
    // testing => if(includeNumbers.checked) h3.classList.remove('hidden')
}

function copy() {
    display.select()
    navigator.clipboard.writeText(display.value)
}
clipboard.addEventListener('click', copy)

function generatePassword() {
    let passwordDisplay = []
    for(let i = 0; i<length.value; i++){
        if(includeNumbers.checked &&  i % 3 === 0){
            passwordDisplay.push(numbers[Math.floor(Math.random() *10)])      
        }else if(includeSymbols.checked &&  i % 5 === 0 ){
            passwordDisplay.push(symbols[Math.floor(Math.random() *19)])      
        }else if(includeUppercase.checked &&  i % 4 === 0){
            passwordDisplay.push(characters[Math.floor(Math.random() *26)].toUpperCase())      
        }else{
        passwordDisplay.push(characters[Math.floor(Math.random() *26)])
        }
    }//display the password and shuffle elements  
    let shuffled = passwordDisplay.sort((a, b) => 0.5 - Math.random())
    display.value = shuffled.join('')
    display.innerText = display.value
    
        //Changing the password strength indicator
        if(length.value >= 0 && length.value <= 12){
            strength.innerText = 'Weak'
            strength.style.color = 'red'
            firstLevel.style.backgroundColor = 'red'
            secondLevel.style.backgroundColor = 'transparent'
            thirdLevel.style.backgroundColor = 'transparent'
            fourthLevel.style.backgroundColor = 'transparent'
        }else if(length.value >= 12 && length.value <= 17){
            strength.innerText = 'Medium'
            strength.style.color = 'yellow'
            firstLevel.style.backgroundColor = 'red'
            secondLevel.style.backgroundColor = 'yellow'
            thirdLevel.style.backgroundColor = 'transparent'
            fourthLevel.style.backgroundColor = 'transparent'
        }else if(length.value >= 17 && length.value <= 25){
            strength.innerText = 'Strong'
            strength.style.color = 'orange'
            firstLevel.style.backgroundColor = 'red'
            secondLevel.style.backgroundColor = 'yellow'
            thirdLevel.style.backgroundColor = 'orange'
            fourthLevel.style.backgroundColor = 'transparent'
        }else  if(length.value >= 25 && length.value <= 30){
            strength.innerText = 'Perfect!'
            strength.style.color = 'green'
            firstLevel.style.backgroundColor = 'red'
            secondLevel.style.backgroundColor = 'yellow'
            thirdLevel.style.backgroundColor = 'orange'
            fourthLevel.style.backgroundColor = 'green'
        }

    }

generate.addEventListener('click', generatePassword)





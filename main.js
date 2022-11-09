const display = document.querySelector('.password')
const length = document.querySelector('.passwordLength')
const strength = document.querySelector('.diff')
const levels = document.querySelector('.level')
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
let password = []
let generateCounter = 0

let passwordDisplay = [];

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
    for(let i = 0; i<length.value; i++){
        passwordDisplay.push(characters[Math.floor(Math.random() *26)])
        console.log(passwordDisplay)
    }if(includeNumbers.checked &&  i % 3 === 0){
        passwordDisplay.push(numbers[Math.floor(Math.random() *10)])
        console.lod(adanije)
    }
    display.value = passwordDisplay.join('')
    display.innerText = display.value
  
    
}{once:true}

generate.addEventListener('click', generatePassword)











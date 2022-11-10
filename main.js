const display = document.querySelector('.password')
const length = document.querySelector('.passwordLength')
const strength = document.querySelector('.diff')
const levels = document.querySelector('.level')
const clipboard = document.getElementById('clipboard')
const slider = document.querySelector('.slider')
const includesUppercase = document.getElementById('includeUppercase')
const includesNumbers= document.getElementById('includeNumbers')
const includesSymbols = document.getElementById('includeSymbols')
const generate= document.querySelector('.test')
const h3 = document.querySelector('h3')
const h1 = document.querySelector('h1')
let numbers = [0,1,2,3,4,5,6,7,8,9]
let characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let symbols = ['@','#','$','%','^','&','*','(',')','_','+','?','<','>',':','{','}','[',']']
let password = []

let passwordLength;

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
}

function generatePassword(length){
    for(let i = 0; i < length.value; i++){
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    password = password.join('')
    display.value = password
    display.innerHTML = display.value
}

generate.addEventListener('click', generatePassword)








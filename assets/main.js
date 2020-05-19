


let rollbutton = document.querySelector('#roll-button')
let textboxInput = document.querySelector('#textbox')
let rollList = document.querySelector('#rollList')
let totalNumber = document.querySelector('#totalNumber')
let showRolls = document.querySelector('#show-rolls-button')
let reset = document.querySelector('#reset')
let sideBox = document.querySelector('#sideBox')
let sides = document.querySelector('#sides')

let dierolls = []
let rolledSide = 0


reset.addEventListener('click', function(){
    totalNumber.innerHTML = ""
    rollList.innerHTML = ""
})



rollbutton.addEventListener('click', function() {
    dierolls = []
    let rollValue = textboxInput.value 
    let sideValue = sideBox.value
    let rollTimes = rollValue
    let counter = 0
    let rolledSide = 0
    let rollTotal = 0

    if (sideValue === "") {
     while (counter < rollTimes) {
        rolledSide = Math.floor(Math.random() * 6) + 1
        console.log(rolledSide)
        dierolls.push(rolledSide)
        rollTotal = rollTotal + rolledSide
        counter++
    }
 }
 else {
    while (counter < rollTimes) {
        rolledSide = Math.floor(Math.random() * sideValue) + 1
        console.log(rolledSide)
        dierolls.push(rolledSide)
        rollTotal = rollTotal + rolledSide
        counter++
    }

 }
    totalNumber.innerHTML = rollTotal
    console.log(dierolls)
    
})

showRolls.addEventListener("click", function(){
    let counter = 0
    let wholeArray = ""
    while (counter < dierolls.length) {
    wholeArray += '<li class="dice">' + dierolls[counter] + "</li>"
    if (rolledSide === 1){
        wholeArray += '<li class="dice">' + dierolls[counter] + "&#x2680;" + "</li>"
    }
     console.log(dierolls)
     
     counter++
     
     
    }
    rollList.innerHTML = wholeArray
 })
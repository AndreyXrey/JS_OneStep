let numberOne = document.querySelector('.number-one')
let numberTwo = document.querySelector('.number-two')
let numberThree = document.querySelector('.facIn')

let  plusBu= document.querySelector('.plus')
let  minusBu= document.querySelector('.minus')
let  divideBu= document.querySelector('.divide')
let  multiplyBu= document.querySelector('.multiply')
let faBu= document.querySelector('.fac')

let clearBu= document.querySelector('.clear')
let clearBu2= document.querySelector('.clear2')


let resultText = document.querySelector('.result')
let resultFText = document.querySelector('.resultF')
//------------------------------------------------
clearBu.addEventListener('click', function(){
	resultText.innerText= ''
	numberOne.value= ''
	numberTwo.value= ''
})
//------------------------------------------------
plusBu.addEventListener('click', function(){
	let numOne = parseInt(numberOne.value)
	let numTwo = parseInt(numberTwo.value)
	let sum = numOne+numTwo
	resultText.innerText = sum
})
//------------------------------------------------
minusBu.addEventListener('click', function(){
	let numOne = parseInt(numberOne.value)
	let numTwo = parseInt(numberTwo.value)
	let diff = numOne-numTwo
	resultText.innerText = diff
})
//------------------------------------------------
divideBu.addEventListener('click', function(){
	let numOne = parseInt(numberOne.value)
	let numTwo = parseInt(numberTwo.value)
	let div = numOne/numTwo
	resultText.innerText = div
})
//------------------------------------------------
multiplyBu.addEventListener('click', function(){
	let numOne = parseInt(numberOne.value)
	let numTwo = parseInt(numberTwo.value)
	let mul = numOne*numTwo
	resultText.innerText = mul
})
//------------------------------------------------
multiplyBu.addEventListener('click', function(){
	let numOne = parseInt(numberOne.value)
	let numTwo = parseInt(numberTwo.value)
	let mul = numOne*numTwo
	resultText.innerText = mul
})
//------------------------------------------------
function fact(x){
  if (x>1) return x*fact(x-1);
  else return 1;
}
faBu.addEventListener('click', function(){
	let numThree = parseInt(numberThree.value)
	let fu = fact(numThree)
	resultFText.innerText = fu
})
clearBu2.addEventListener('click', function(){
	resultFText.innerText= ''
	numberThree.value = ''
})

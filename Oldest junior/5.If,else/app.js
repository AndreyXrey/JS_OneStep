// let numberOne = document.querySelector('.number-one')
// let button = document.querySelector('.button')
// let result = document.querySelector('.result')

// button.addEventListener('click', function(){
// 	if (numberOne.value>20) {
// 		result.innerText = `Число ${numberOne.value} больше 20`
// 	} else{
// 		result.innerText = `Число ${numberOne.value} меньше 20`
// 	}
// })

let numberOne = document.querySelector('.number-one')
let button = document.querySelector('.button')
let result = document.querySelector('.result')

button.addEventListener('click', function(){
	let price = 100
	let age = numberOne.value
	if (age<8) {
		price=0
	} else if (age<21) {
		price=price*0.8
	} else if (age>21) {
		price=price
	}
	// ЕСЛИ(условие){
		//ЛОГИКА
	// }
	result.innerText = `Цена билета равна ${price}`
})
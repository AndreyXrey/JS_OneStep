function add() {
	return 7+1+7
}

let headerOne = document.querySelector('.he1')
	headerOne.innerText = add()

// let headerTwo = document.querySelector('.he2')
// 	headerTwo.innerText = add()

// let headerThree = document.querySelector('.he3')
// 	headerThree.innerText = add()

// let headerFour = document.querySelector('.he4')
// 	headerFour.innerText = add()

// let headerFive = document.querySelector('.he5')
// 	headerFive.innerText = add()

// let headerSix = document.querySelector('.he6')
// 	headerSix.innerText = add()

function greeting2(name) {
	return `Hello, ${name}`
}
let greetOne = document.querySelector(".he0")
	greetOne.innerText = greeting2("Andreas The Great")

// function greeting() {   //это альтернатинвный вариант
// 	let name = "my name"
// 	return `Andreas The Great`
// }
// let greetOne = document.querySelector(".he0")
// greetOne.innerText = greeting()
function fact(x){
  if (x>1) return x*fact(x-1);
  else return 1;
}
let factorial = document.querySelector('.he7')
	factorial.innerText = fact(21)

function add2(a,b,c) {
	return a+b+c;
}
let sum = document.querySelector('.he8')
	sum.innerText = add2(27, 33,255)

function SUM(a) {
	if (a>1) return a+SUM(a-1);
	else return 1;
}
let foco = document.querySelector('.he9')
	foco.innerText = SUM(5)

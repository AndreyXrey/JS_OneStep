// let body = document.querySelector('body')
	

// let car = 'Toyota'
// console.log(car)

// let carObj = {name:'Supra', color:'red'}
// console.log(carObj)

// let age = 19
// console.log(age)

// let sum= 7+8
// console.log(sum)

// let colorArr= ['black', 'green', 'pink', 'purple', 'red']
// console.log(colorArr)
// debugger
let carObj = {name:'Supra', color:'red', year: 2000}
console.log(carObj)

let body = document.querySelector('body')
// 
let na = document.createElement('p')
	na.innerText = carObj.name
	na.setAttribute("class", "na")

let co = document.createElement('p')
	co.innerText = carObj.color
	co.setAttribute("class", "na")

let ye = document.createElement('p')
	ye.innerText = carObj.year
	ye.setAttribute("class", "na")

body.appendChild(na)
body.appendChild(co)
body.appendChild(ye)

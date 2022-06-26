let myInput = document.createElement('input')
	myInput.setAttribute('type', 'number')
	myInput.setAttribute('class', 'nIm')
let body = document.querySelector('body')
	body.appendChild(myInput)
// -------------------------------------------------------------
let myButton = document.createElement('button')
	body.appendChild(myButton)
	myButton.innerText = 'Показать'
	// myButton.setAttribute('type', 'number')
	myButton.setAttribute('class', 'nBu')
// -------------------------------------------------------------
let para = document.createElement('p')
	para.innerText = 'test'
	body.appendChild(para)

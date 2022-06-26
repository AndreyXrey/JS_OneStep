// let myButton = document.querySelector('.my-button')

// let myHeader = document.querySelector('.header')
	// myHeader.innerText="Привет"
	// myHeader.innerText="Привет, " + myInput.value


	// myButton2.addEventListener('click', function(){   //построчное сложение
	// 	let inputValue = myInput.value
	// 	let secondInputValue = myInput2.value
		
	// 	myHeader.innerText = inputValue + secondInputValue
	// })
let myInput = document.querySelector('.my-input')
let myButton = document.querySelector('.my-button2')
let myInput2 = document.querySelector('.my-input2')
let myHeader = document.querySelector('.header')
	myButton.addEventListener('click', function(){
		let inputValue = parseInt(myInput.value)
		let secondInputValue = parseInt(myInput2.value)
		myHeader.innerText = inputValue
		myHeader.innerText = inputValue + secondInputValue
	})
// -------------------------------------------------------------
let fucInput = document.querySelector('.inputF')
let fucButton = document.querySelector('.fucBut')
let fH = document.querySelector('.fucHeader')

	
		function fact(x){
			if (x>1) return x*fact(x-1);
			else return 1;
			}
	fucButton.addEventListener('click', function (){
		let iValue = parseInt(fucInput.value)
			fH.innerText = fact(iValue)
		})
// -------------------------------------------------------------

let mBu = document.querySelector('.mB')
let mIm = document.querySelector('.mI')
let mHe = document.querySelector('.mH')
	mBu.addEventListener('click', function(){
		let amount = parseInt(mIm.value)
		let VAT = 0.15
		mHe.innerText = amount*VAT
		mHe.innerText = `Сумма НДС с ${amount} равна ${amount*VAT}`
	})

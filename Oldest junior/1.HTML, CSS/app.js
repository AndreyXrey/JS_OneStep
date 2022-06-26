
		let carOne = "BMW"
		let carTwo = "Audi"
		let carThree = "Tesla"
		let cars = ["BMW", "Audi", "Tesla", "Toyota", "Honda"]
		//Это создание массива!
		// cars.push("Mers")
		// cars.pop()	//удаляет последний элемент
		// cars.shift()	//удаляет первый элемент
		// cars.unshift("Mers")

		let myCars = document.querySelector('.cars')
		myCars.innerText = cars
		//myCars.innerText = cars[2]
		//myCars.innerText = cars.length
		//считает длину массива



		let car = document.querySelector('.car')

		let myCar = {model: "Toyota supra", year: 2000, color: "purple"}

		car.innerText = `Model is ${myCar.model} color ${myCar.color} and year is ${myCar.year}`

		let addText = document.querySelector('.add-text')
		let fName = "Andreyka"
		let lName = "Krutoy"
		let fullName= fName + " " + lName
		let age= 19
		fullName= `${fName} ${age} ${lName}`+1
		addText.innerText = fullName

		let myHeader = document.querySelector(".zhopa")
		//document.querySelector(".zhopa").innerText="биллибирдa"
		myHeader.innerText = "Белелеберда11"

		let myName = document.querySelector(".name") 
		//document.querySelector(".name").innerText="Andreas"
		myName.innerText = "Andrey"

		let thatMult = document.querySelector(".mult")
		//document.querySelector(".plus").innerText= 234+3
		thatMult.innerText = 15*15

		let numOne = 14
		let numTwo = 57
		let someSum = numTwo + numOne

		let sumElement = document.querySelector(".sum")
		sumElement.innerText = someSum

		let myMinus = document.querySelector(".minus")
		myMinus.innerText = 15-22

		let Pluss = document.querySelector(".plusex")
		Pluss.innerText =23+72


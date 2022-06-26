// let headerOne = document.createElement('h1')
// 	headerOne.innerText = 1+1
// let headerTwo = document.createElement('h1')
// 	headerTwo.innerText = 1+1

// 	body.appendChild(headerOne)
// 	body.appendChild(headerTwo)

let body = document.querySelector('body')
 //for(начало = 1; 5 раз; счетчик = 5){}
for(let start = 1; start<11; start=start+1){
	let header = document.createElement('h1')
		header.innerText = 1+2
		header.setAttribute("class", "hehe")

	body.appendChild(header)
}
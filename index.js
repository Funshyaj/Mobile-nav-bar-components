//declare variables
const hamburger = document.querySelectorAll(".hamburger")
const hamburger2 = document.querySelector(".hamburger2")
const cancelBtn = document.querySelector("#menu-cancel")
const licancel = document.querySelectorAll("li")


//to cancel click for window press 


//function for selecting all hamburger buttons and initaiting the active mode of the menu with toggle
hamburger.forEach(menu =>{
	menu.addEventListener("click", (e)=>{
		//let li = document.create("li")
		//li.innerHTML = "X"
		//ul.appendChild(li)
	let ul = menu.previousElementSibling
		ul.classList.toggle("active")
		menu.classList.toggle("active")
	})
})

//to close menu when any link in menu is pressed
licancel.forEach(li =>{
	li.addEventListener("click", (e)=>{
	let ul = li.parentElement
	let uncle = li.parentElement.nextElementSibling
		ul.classList.remove("active")
		uncle.classList.remove("active")
	})
})

//to close menu when "X" button is pressed
hamburger2.addEventListener("click", (e)=>{
	let ul = hamburger2.previousElementSibling
		ul.classList.toggle("active")
	})


cancelBtn.addEventListener("click", (e)=>{
let ul = cancelBtn.parentElement
	console.log(ul);
		ul.classList.remove("active")
	})

	
	let navOpen = document.querySelector("#nav-opener");
	let nav = document.querySelector("#mynav");
	let navClose = document.querySelector(".navClose");
	let body = document.querySelector("body");


	
	navOpen.addEventListener("click", function(){
		nav.style.right = "0%"
	})

	navClose.addEventListener("click", function(){
		nav.style.right = "-100%"
	}) 

	body.addEventListener("click", function(){
		nav.style.right = "-100%"
	},true) 

	nav.addEventListener("click", function(){
		nav.style.right = "0%"
	},true) 




	let shopOpener = document.querySelector(".shop-opener");
	let shopClose = document.querySelector(".shop-close");
	let mMenuOpener = document.querySelector(".mMenuOpener");
	let menuClose = document.querySelector(".m-navClose");
	let mMenu = document.querySelector(".mobile-menu");
	let tab1 = document.querySelector(".m-nav-tab1");
	let tab2 = document.querySelector(".m-nav-tab2");

	

	shopOpener.addEventListener("click", function(){
		tab1.style.left ="-105%";
		tab2.style.left ="0%";
	})
	shopClose.addEventListener("click", function(){
		tab1.style.left ="0%";
		tab2.style.left ="105%";

	})

	mMenuOpener.addEventListener("click", function(){
		mMenu.style.top = "0%";

	})

	menuClose.addEventListener('click', function(){
		mMenu.style.top ="110%";
		tab1.style.left ="0%";
		tab2.style.left ="105%";



	})

	/*	
		SEARCH JS START
	*/

	let search = document.querySelectorAll(".search");
	let searchContainer = document.querySelector(".search-section");
	let searchClose = document.querySelector(".searchClose");
	let body = document.querySelector("body");

	body.addEventListener("click", function(){
			searchContainer.style.display = "none";
		
	},true)
	search.forEach(function(e){
		e.addEventListener("click", function(){
			searchContainer.style.display = "block";

		})

	})
	searchContainer.addEventListener("click", function(){
			searchContainer.style.display = "block";

		},true)
	searchClose.addEventListener("click", function(){
			searchContainer.style.display = "none";

	})



	/*
		CART POPUP SECITON START
	*/

	let qView = document.querySelectorAll(".q-view");
	let cartClose = document.querySelector(".cart-close");
	let cartSection = document.querySelector(".cart-section");

	qView.forEach((e)=>{
		e.onclick = function(){
			cartSection.style.display = "block";
		}
	})

	cartClose.addEventListener("click", function(){
		cartSection.style.display = "none";
	})

	// CATY QTY SECTION START

	let cartDec = document.querySelector('.cart-dec');
	let cartInc = document.querySelector('.cart-inc');
	let cartQtyInput = document.querySelector('.cart-qty-input');

	// let cartValue =  parseInt(cartQtyInput.value);
	cartInc.addEventListener("click", function(){
		cartQtyInput.value = +cartQtyInput.value+1;
	})

	cartQtyInput.addEventListener('keyup', function(){
		if (cartQtyInput.value < 1 ) {
			cartQtyInput.value = 1;
			
		}
	})

	cartDec.addEventListener("click", function(){
		if (cartQtyInput.value == 1) {
			alert("min value reached")
			cartQtyInput.value = 1;

			cartDec.removeEventLister("click");
		}else{
			cartQtyInput.value = +cartQtyInput.value-1;

		}
			
	})



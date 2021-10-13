function addToCart() {
	let cartElement = document.getElementById("cart-amount")
	var amount = 0
	if (cartElement.textContent != "") {
		amount = cartElement.textContent.replace(/\D/g,'') // removes all non-numeric digits from string
	}
	let newAmount = parseInt(amount) + 1
	cartElement.textContent = "(" + newAmount + ")"
} 

function deselectIfQuantitySelected(id) {
	// helper function that is called when a quantity is selected. 
	// If a different button is already selected, this function will deselect it
	var selected = "rgb(240, 215, 185)"
	var unselected = "rgb(255, 255, 255)"
	var button = document.getElementById(id)
	if (button.style.background === selected) {
		
		button.style.background = unselected
	}
}

function selectQuantityOne() {
	var selected = "rgb(240, 215, 185)"
	var unselected = "rgb(255, 255, 255)"
	var one_button = document.getElementById("one")
	if (one_button.style.background === selected) {
		one_button.style.background = unselected

	}
	else {
		one_button.style.background = selected
		// check if each of the other buttons are already selected
		deselectIfQuantitySelected("three") 
		deselectIfQuantitySelected("six")
		deselectIfQuantitySelected("twelve")
	}
	
}


function selectQuantityThree() {
	var selected = "rgb(240, 215, 185)"
	var unselected = "rgb(255, 255, 255)"
	var three_button = document.getElementById("three")
	if (three_button.style.background === selected) {
		three_button.style.background = unselected
	}
	else {
		three_button.style.background = selected
		// check if each of the other buttons are already selected
		deselectIfQuantitySelected("one") 
		deselectIfQuantitySelected("six")
		deselectIfQuantitySelected("twelve")
	}
}


function selectQuantitySix() {
	var selected = "rgb(240, 215, 185)"
	var unselected = "rgb(255, 255, 255)"
	var five_button = document.getElementById("six")
	if (five_button.style.background === selected) {
		five_button.style.background = unselected
	}
	else {
		five_button.style.background = selected
		// check if each of the other buttons are already selected
		deselectIfQuantitySelected("one") 
		deselectIfQuantitySelected("three")
		deselectIfQuantitySelected("twelve")
	}
}


function selectQuantityTwelve() {
	var selected = "rgb(240, 215, 185)"
	var unselected = "rgb(255, 255, 255)"
	var twelve_button = document.getElementById("twelve")
	if (twelve_button.style.background === selected) {
		twelve_button.style.background = unselected
	}
	else {
		twelve_button.style.background = selected
		// check if each of the other buttons are already selected
		deselectIfQuantitySelected("one") 
		deselectIfQuantitySelected("three")
		deselectIfQuantitySelected("six")
	}
}

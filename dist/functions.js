function add(a, b){
	a= parseFloat(a) /* reassigns a with numerical value */
	b= parseFloat(b) 
	return a + b;

}

function subtract(a,b){
	a= parseFloat(a);
	b= parseFloat(b);
	return a - b;
}

function tax(subtotal, tax){
	subtotal = $30.00;
	tax = 5%;
	return subtotal * tax;
}

function stringLength(){

	if (string.length < 5) {
		console.log ("short string")
	}
}
	else if (string.length <5 && >10){
		console.log ("medium string")
	}
	else (string.length > 10){
		console.log("long string")
	}
}

function startsWith(stringName){
	if (stringName.charAt(0 = "a" || stringName.charAt(0 = "A" )){
		console.log("starts with A");
	}
	else if (stringName.charAt(0 = "b" || stringName.charAt(0 = "B" )){
		console.log("starts with B");
	}
	else if (stringName.charAt(0 = "c" || stringName.charAt(0 = "C" )){
		console.log("starts with C");
	}
	else if (stringName.charAt(0 = "d" || stringName.charAt(0 = "D" )){
		console.log("starts with D");
	}
	else if (stringName.charAt(0 = "e" || stringName.charAt(0 = "E" )){
		console.log("starts with D");
	}
	else {
		console.log ("starts with something else")
	}
}

function stringRepeat(string, number) {
	number = (Math.abs(number));
	return string(number + 1).j
}

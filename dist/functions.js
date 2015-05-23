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
	subtotal = 30;
	tax = .05;
	return subtotal * tax + "$";
}

function stringLength(){

	if (string.length < 5) {
		console.log ("short string")
	}

	else if (string.length <5 && string.length >10){
		console.log ("medium string")
	}
	else (string.length > 10){
		console.log("long string")
	}
}

function startsWith(stringName){
	if (stringName.charAt(0 === "a" || stringName.charAt(0 === "A" )){
		console.log("starts with A");
	}
	else if (stringName.charAt(0 === "b" || stringName.charAt(0 === "B" )){
		console.log("starts with B");
	}
	else if (stringName.charAt(0 === "c" || stringName.charAt(0 === "C" )){
		console.log("starts with C");
	}
	else if (stringName.charAt(0 === "d" || stringName.charAt(0 === "D" )){
		console.log("starts with D");
	}
	else if (stringName.charAt(0 === "e" || stringName.charAt(0 === "E" )){
		console.log("starts with D");
	}
	else {
		console.log ("starts with something else")
	}
}

function stringRepeat(string, number) {
	number = (Math.abs(number));
	return string * number

	if string !== string {
		console.log ("Invalid Input")
	} 
	if number !== number 
		console.log("Invalid Input")
	}
}
//need to get sum of user input number + every number less than user input 
//number all the way to 1
//eg. n=5, so 5+4+3+2+1 = 15;
function nSum(input) {
	var sum = 0; 
	for(var i=1; i<=input; i++){
		sum += i;
	}

}

function countLetters (inputString){
  //var numAs= 0;
  var letterCount = {}; //this will eventually store letter count for each letter
  for (var i =0; i<inputString.length; i++) {
  	var currentLetter = inputString.charAt(i);
  	//letterCount[currentLetter]= 1;
  	if(!letterCount.hasOwnnProperty(currentLetter){
  		letterCount[currentLetter]++;
  	}
  	else {
  		letterCount[currentLetter]++;
  	}
  	//if(inputString.charAt(i) === "a") {
  	//	numAs = numAs +1;
  	//}
  //}
 return letterCount;
}

var book {
	title: "MEAT: Everything You Need to Know",
	ISBN: "1476725993",
	author: "Pat LaFrieda",
	datePublished: "2 September 2014"
}
for (var prop in book) {
	console.log(prop. " " )
}
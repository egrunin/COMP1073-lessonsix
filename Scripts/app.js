"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

var checkMeOut;

// searching the entire page for 'checkMeOut'
checkMeOut = document.getElementById("checkMeOut");


/*
cheMeOut.onclick(function(){
	console.log("checkMeOut clicked");
});
*/


// bind an event listener to the 'checkMeOut' element
checkMeOut.addEventListener("click", function(){
	
	if(checkMeOut.checked){
		console.log("It's checked");
	} else {
		console.log("It's unchecked");
	}
	
	/* ternary form
	(checkMeOut.checked)? console.log("It's checked") : console.log("It's unchecked");
	*/
});



})();


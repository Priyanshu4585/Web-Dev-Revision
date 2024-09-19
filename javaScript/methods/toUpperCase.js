// correcting thi input name such that it stays in the right format using toLowerCase and toUpperCase methods;

var yourName = prompt("type your name");
var firstLetter = yourName.slice(0,1);
var restLetters = yourName.slice(1,yourName.length);
var cFirstLetter = firstLetter.toUpperCase();
var lRestLetters = restLetters.toLowerCase();
alert( "Hello, " + cFirstLetter + lRestLetters);
// or
alert("Hello, " + yourName.slice(0,1).toUpperCase() + yourName.slice(1,yourName.length).toLowerCase());
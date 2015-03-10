// try to understand what happens in here:
function greets () {
 console.log('Hello!');
 greets = function () {
   console.log('Bye!');
   return greets;
 };
 return greets;
}

greets(); // "Hello" -> function ()

greets()(); // "Bye" -> "Bye" -> function ()

greets()()(); // "Bye" -> "Bye" -> "Bye" -> function ()


function greets () {
 console.log('Hello!');
 var greets = function () {
   console.log('Bye!');
   return greets;
 };
 return greets;
}

greets(); // "Hello" -> function ()

greets()(); // "Hello" -> "Bye" -> function ()

greets()()(); // "Hello" -> "Bye" -> "Bye" -> function ()

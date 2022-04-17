console.log("   ")
console.log("Exercise 2: Strings");

//ex. 2.a.: Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log("exercise 2.a:");
var wordA = 'strawberry';
console.log("Ex-2.a-result:", wordA.toUpperCase());

//ex. 2.b.: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log("exercise 2.b:");
var wordB = 'friendship';
var wordBb = wordB.substring(0, 5);
console.log("Ex-2.b-result:", wordBb);

//ex. 2.c.: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log("exercise 2.c:");
var wordC = 'Everything';
var wordCc = wordC.substring(7, 10);
console.log("Ex-2.c-result:", wordCc);

//ex. 2.d.: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log("exercise 2.d:");
var wordD = 'aPPRECIATE'
var wordDd = wordD.substring(0, 1).toUpperCase() + wordD.substring(1, 10).toLowerCase();
console.log("Ex-2.d-result:", wordDd);

//ex. 2.e.: Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log("exercise 2.e:");
var wordsE = 'Return Value'
console.log("Ex-2.e-result:", wordsE.indexOf(' ',))

//ex. 2.f.: Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log("exercise 2.f:");
var wordsF = 'aBOMINABLE eQUALIZERS';
var wordsFf = wordsF.indexOf('aBOMINABLE') + " " + wordsF.indexOf('eQUALIZERS');
console.log("Find first letters results:", wordsFf);
var resultF = wordsF.substring(0, 1).toUpperCase() + wordsF.substring(1, 11).toLowerCase() + 
wordsF.substring(11, 12).toUpperCase() + wordsF.substring(12).toLowerCase();

console.log("Ex-2.f-result:", resultF)
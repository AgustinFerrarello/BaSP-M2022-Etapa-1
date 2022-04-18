console.log("   ");
console.log("Exercise 3: Arrays");

//ex. 3.a.: Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log("exercise 3.a:");
var array = ['January', 'February', 'March', 'April', 'May', 'June', 
'July', 'August', 'Septembre', 'October', 'November', 'December'];
var arrCopy = Object.assign([], array)
console.log("Ex-3.a-result:", array[4], array[10]);

//ex. 3.b.: Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log("exercise 3.b:");
console.log("Ex-3.b-result:", array.sort());

//ex. 3.c.: Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log("exercise 3.c:");
array.unshift('2022');
array.push('2023');
console.log("Ex-3.c-result:", array);

//ex. 3.d.: Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log("exercise 3.d:");
array.shift();
array.pop();
console.log("Ex-3.d-result:", array);

//ex. 3.e.: Invertir el orden del array (utilizar reverse).
console.log("exercise 3.e:");
array.reverse();
console.log("Ex-3.e-result:", array);

//ex. 3.f.: Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log("exercise 3.f:");
console.log("Ex-3.f-result:", array.join('-'));

//ex. 3.g.: Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log("exercise 3.g:");
var mayNov = arrCopy.slice(4, 11);
console.log("Ex-3.g-result:", mayNov);
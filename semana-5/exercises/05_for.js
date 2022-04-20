console.log("   ");
console.log("Exercise 5: For");


//ex. 5.a.: Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
console.log("exercise 5.a:");
var array = ['Park', 'Bike', 'Cars', 'Birds', 'Tree'];
for (i = 0; i < array.length; i++) {
    alert(array[i]);
}

//ex. 5.b.: Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
console.log("exercise 5.b:");
for (i = 0; i < array.length; i++) {
    alert(array[i].toLowerCase(0));
}

//ex. 5.c.: Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
console.log("exercise 5.c:");
var sentence = [];
for (i = 0; i < array.length; i++) {
    sentence = sentence + ' ' + array[i];
}
alert(sentence)
console.log("Ex-5.c-result:", );

//ex. 5.d.: Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
console.log("exercise 5.d:");
var emptyArray = [];
for (i = 0; i < 10; i++) {
    emptyArray.push(i);
}
console.log("Ex-5.d-result:", emptyArray);
console.log("   ");
console.log("Exercise 6: Functions");


//ex. 6.a.: Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
console.log("exercise 6.a:");
var first = 45;
    _second = 54;
function numbers(first, _second) {
    var add = first + _second;
    return add;
}
var result = numbers(first, _second);
console.log("Ex-6.a-result:", result);

//ex. 6.b.: A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
console.log("exercise 6.b:");
var first = 40;
    _second = 10;
function isNumber(first, _second) {
    if (typeof first !== 'number' || typeof _second !== 'number') {
        alert("One parameter isn't number");
        return NaN;
    } else {
        var add = first + _second;
        return add;
    }
}
var check = isNumber(first, _second);
console.log("Ex-6.b-result:", check);

// //ex. 6.c.: Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log("exercise 6.c:");
function validate(num) {
    if (Number.isInteger(num)) {
        return true;
    }
    return false
}
var test = validate(7);
console.log("Ex-6.c-result:", test);

// //ex. 6.d.: A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
console.log("exercise 6.d:");
var first = 40;
    _second = 10;
function isInteger(first, _second) {
    if (typeof first !== 'number' || typeof _second !== 'number') {
        alert("One parameter isn't number");
        return NaN;
    } else if (!Number.isInteger(first) || !Number.isInteger(_second)){
        alert("An parameter aren't interger");
        return parseInt(first), parseInt(_second);
    } else {
        var suma = first + _second;
        return suma;
    }
}
var toInt = isInteger(first, _second);
console.log("Ex-6.d-result:", toInt);

// //ex. 6.e.: Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
console.log("exercise 6.e:");
function isInteger(first, _second) {
    if (!Number.isInteger(first) || !Number.isInteger(_second)){
        alert("An parameter aren't interger");
        return Math.round(first), Math.round(_second);
    } else {
        var suma = first + _second;
        return suma;
    }
}
var _third = 100;
    _fourth = 50.7;
var result = isInteger(_third, _fourth)
function addNum(_third, _fourth) {
}
console.log("Ex-6.e-result:", result);
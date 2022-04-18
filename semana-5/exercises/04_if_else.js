console.log("   ");
console.log("Exercise 4: If-Else");
//ex. 4.a.: Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
console.log("exercise 4.a:");
var random = ((Math.random()));
if (random < 0.5) {
    window.alert('Lower than 0,5',);
}   else{
    window.alert('Higher than 0,5');
}
console.log("Ex-4.a-result: The random number it's ", random)

// ex. 4.b.: Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
// “Bebe” si la edad es menor a 2 años;
// “Niño” si la edad es entre 2 y 12 años;
// “Adolescente” entre 13 y 19 años;
// “Joven” entre 20 y 30 años;
// “Adulto” entre 31 y 60 años;
// “Adulto mayor” entre 61 y 75 años;
// “Anciano” si es mayor a 75 años.
console.log("exercise 4.b:");
var age = Math.round((Math.random() * 100));
if(age <= 2) {
    alert("Baby");
}   else if(age > 2 && age <= 12) {
    alert("Child");
}   else if(age > 12 && age <= 19) {
    alert("Teen");
}   else if(age > 19 && age <= 30) {
    alert("Young adult");
}   else if(age > 30 && age <= 60) {
    alert("Adult");
}   else if(age > 60 && age <= 75) {
    alert("Elderly");
}   else {
    alert("Old man/woman");
}
console.log("Ex-4.b-result: The age it's ", age);
let apellido = "godoy";
console.log(apellido);

const pi = 3.14159;
console.log(pi);

let nombre = "Ramiro";
let edad = 17;
let altura = 1.72;
let esEstudiante = true;

console.log(nombre);
console.log(edad);
console.log(altura);
console.log(esEstudiante);

// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//

function sumar(num1, num2) {
  return num1 + num2;
}

let suma = sumar(5, 5);
console.log(suma);

function resta(num1, num2) {
  return num1 - num2;
}

let restar = resta(10, 8);
console.log(restar);

function multiplicar(num1, num2) {
  return num1 * num2;
}

let multi = multiplicar(2, 8);
console.log(multi);

function dividir(num1, num2) {
  return num1 / num2;
}
let dividido = dividir(10, 2);
console.log(dividido);

// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//// ACTIVIDAD 1//

// ACTIVIDAD 2// // ACTIVIDAD 2//// ACTIVIDAD 2//// ACTIVIDAD 2//// ACTIVIDAD 2//// ACTIVIDAD 2//// ACTIVIDAD 2//// ACTIVIDAD 2//// ACTIVIDAD 2//// ACTIVIDAD 2//// ACTIVIDAD 2//

function nummayor(num1, num2) {
  return num1 > num2;
}
let mayormenor = nummayor(10, 5);
console.log(mayormenor);

function nummenor(num1, num2) {
  return num1 < num2;
}
let menormayor = nummenor(8, 5);
console.log(menormayor);

function igual(num1, num2) {
  return num1 == num2;
}
let iguales = igual(10, 10)
console.log(iguales)

function masmenos(num1) {
  return num1 > 0 && num1 < 10;
}
let menosmas = masmenos(11)
console.log(menosmas)

function divisible(num1) {
  return num1 % 2 == 0 || num1 % 3 == 0
}
let divi = divisible(12)
console.log(divi)

let x = 5;
x += 3;
console.log(x)

let y = 10;
y *= 2;
console.log(y)

let contador = 0
contador++
console.log(contador)

let descontador = 0
descontador--
descontador--
console.log(descontador)

function showAlert() { //function de boton linkeado con html//
  alert("hola");
}

// Traer elementos del DOM
const boton = document.getElementById ("ponernombre2")
const cambiartono = document.getElementById ("cambiar-color")
// TOMAR NOMBRE

boton.addEventListener("click", () => {
  //aumentarcContador();//
   const ponernombre1 = document.getElementById("ponernombre1").value;
alert (
  "Hola " + 
  ponernombre1 + 
  " Bienvenido a esta pagina. Te invito a que sigas explorando"
);
});
const fondobody = document.getElementById("fondo-body")

cambiartono.addEventListener("click" , () => {
 const color = document.getElementById("color").value;
 fondobody.style.background = color
});


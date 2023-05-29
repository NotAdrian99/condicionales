// Ej.1

// let numero1 = 2;
// let numero2 = 1;

// if (numero1 > numero2) {
//   console.log(`El primer numero (${numero1}) es mayor que el segundo numero (${numero2})`);
// } else {
//   console.log(`El primer numero (${numero1}) es menor que el segundo numero (${numero2})`);
// }

// Ej.2

// let numero1 = 1;
// let numero2 = 1;

// if (numero1 == numero2) console.log("Ambos numeros son iguales");
// else {
//   console.log("Los numeros son diferentes");
// }

// Ej.3

// let numero1 = 1;
// let numero2 = 1;

// if (numero1 > numero2) console.log(`El primer numero (${numero1}) es mayor que el segundo numero (${numero2})`);
// else if (numero1 == numero2) {
//   console.log("Ambos numeros son iguales");
// } else {
//   console.log(`El primer numero (${numero1}) es menor que el segundo numero (${numero2})`);
// }

// Ej.4

// let numero1 = 1;
// let numero2 = 2;
// let numero3 = 3;

// let menor = numero1;

// if (menor > numero2) {
//   menor = numero2;
// }

// if (menor > numero3) {
//   menor = numero3;
// }

// console.log(`El menor numero es ${menor}`);

// Ej.5

// let persona1 = {
//   nombre: "Juan",
//   edad: 23,
//   altura: 190,
// };

// let persona2 = {
//   nombre: "Eustaquio",
//   edad: 25,
//   altura: 170,
// };

// if (persona1.altura > persona2.altura) {
//   console.log(`${persona1.nombre} es mas alt@ que ${persona2.nombre}`);
// } else {
//   console.log(`${persona2.nombre} es mas alt@ que ${persona1.nombre}`);
// }

// if (persona1.edad > persona2.edad) {
//   console.log(`${persona1.nombre} es mas mayor que ${persona2.nombre}`);
// } else {
//   console.log(`${persona2.nombre} es mas mayor que ${persona1.nombre}`);
// }

// Ej.6

// let edad = prompt("Ingrese su edad")
// let altura =prompt("Ingrese su altura")
// let vision =  prompt("Ingrese su agudeza visual (1/10)")

// let edad = 18;
// let altura = 150;
// let vision = 11;

// if ((edad >= 18, altura >= 150, vision >= 8 && vision <= 10)) console.log("Está capacitado para conducir");
// else {
//   console.log("No esta capacitado para conducir");
// }

// Ej.7

// let nombre = prompt("Ingrese su nombre");
// let paseVip = prompt("¿Posee pase vip?");
// let entrada = prompt("¿Tiene entrada?");

// let nombreHost = "Adrian";
// let nombre = "Adrian";
// let paseVip = "si";
// let entrada = "no";

// if (nombre == nombreHost || paseVip == "si") {
//   console.log("Bienvenid@!");
// } else if (entrada == "si") {
//   let usaEntrada = prompt("¿Deseas usar tu entrada?");
//   if (usaEntrada == "si") {
//     console.log("Bienvenid@! Puedes pasar usando tu entrada.");
//   } else {
//     console.log("Bienvenid@! Puedes pasar sin usar tu entrada.");
//   }
// } else {
//   let compraEntrada = prompt("¿Deseas comprar una entrada?");
//   if (compraEntrada == "si") {
//     let dineroDisponible = prompt("¿Cuanto dinero tienes?");
//     if (dineroDisponible >= 1000) {
//       console.log("Gracias por comprar tu entrada, bienvenid@!");
//     } else {
//       console.log("Lo sentimos, este lugar no es para barats.");
//     }
//   } else {
//     console.log("Circulando...");
//   }
// }

// Ej.8

// let numeroIncognita = 8;
// let numeroIngresado = prompt("Ingrese un numero del 1 al 10");

// if (numeroIngresado == numeroIncognita) {
//   alert("Ganaste, has adivinado el número");
// } else if (numeroIngresado > numeroIncognita) {
//   alert("el numero ingresado es mayor, vuelve a intentarlo");
// } else alert("el numero ingresado es menor, vuelve a intentarlo");

// let numeroIngresado2 = prompt("Ingrese un numero del 1 al 10");

// if (numeroIngresado2 == numeroIncognita) {
//   alert("Ganaste, has adivinado el número");
// } else if (numeroIngresado2 > numeroIncognita) {
//   alert("el numero ingresado es mayor, vuelve a intentarlo");
// } else alert("el numero ingresado es menor, vuelve a intentarlo");

// let numeroIngresado3 = prompt("Ingrese un numero del 1 al 10");
// 1;

// if (numeroIngresado3 == numeroIncognita) {
//   alert("Ganaste, has adivinado el número");
// } else if (numeroIngresado3 > numeroIncognita) {
//   alert("el numero ingresado es mayor, vuelve a intentarlo");
// } else alert("el numero ingresado es menor, vuelve a intentarlo");

// Ej.9

// let edad = prompt("Ingrese su edad");

// if (edad <= 12) {
//   alert("Eres un infante!");
// } else if (edad >= 13 && edad <= 18) {
//   alert("Eres un adolescente!");
// } else if (edad >= 19 && edad <= 45) {
//   alert("Eres un mayor joven!");
// } else if (edad >= 46 && edad <= 100) {
//   alert("Eres un anciano!");
// } else if (edad > 100) {
//   alert("Tan viejo sos??");
// }

// Ej.10

// let jugador1 = prompt(`Ingrese "piedra","papel" o "tijera`);
// let jugador2 = prompt(`Ingrese "piedra","papel" o "tijera`);

// let opcionesValidas = ["piedra", "papel", "tijera"];

// if (!opcionesValidas.includes(jugador1) || !opcionesValidas.includes(jugador2)) {
//   alert("Hay un tramposo!");
// }

// if (jugador1 === jugador2) {
//   alert("Empataron");
// } else if ((jugador1 === "piedra" && jugador2 === "tijera") || (jugador1 === "papel" && jugador2 === "piedra") || (jugador1 === "tijera" && jugador2 === "papel")) {
//   alert("El jugador 1 gana!");
// } else {
//   alert("El jugador 2 gana!");
// }

// Ej.11

// let color = prompt("Ingrese un color");

// switch (color) {
//   case "blanco":
//   case "negro":
//     alert("Falta de color");
//     break;
//   case "verde":
//     alert("El color de la naturaleza");
//     break;
//   case "azul":
//     alert("El color del agua");
//     break;
//   case "amarillo":
//     alert("El color del sol");
//     break;
//   case "rojo":
//     alert("El color del fuejo");
//     break;
//   case "marron":
//     alert("El color de la tierra");
//     break;
//   default:
//     alert("Excelente eleccion, no lo teniamos pensado.");
// }

// Ej.12

// let numero1 = parseFloat(prompt("Ingrese el primer numero"));
// let numero2 = parseFloat(prompt("Ingrese el segundo numero"));
// let operacion = prompt("Ingrese la operacion (suma, resta, multiplicacion o division)");

// let resultado;

// switch (operacion) {
//   case "suma":
//     resultado = numero1 + numero2;
//     alert("El resultado es:" + resultado);
//     break;
//   case "resta":
//     resultado = numero1 - numero2;
//     alert("El resultado es:" + resultado);
//     break;
//   case "multiplicacion":
//     resultado = numero1 * numero2;
//     alert("El resultado es:" + resultado);
//     break;
//   case "division":
//     if (numero2 !== 0) {
//       resultado = numero1 / numero2;
//       alert("El resultado es:" + resultado);
//     } else {
//       alert("ERROR");
//     }
//     break;
// }

// Ej. 13

// let numero = prompt("Ingrese su numero de DNI");
// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");
// let fechaNacimiento = prompt("Ingrese su fecha de nacimiento");
// let lugarNacimiento = prompt("Ingrese su lugar de nacimiento");

// alert("Los datos ingresados son: " + numero + " " + nombre + " " + apellido + " " + fechaNacimiento + " " + lugarNacimiento);

// let confirmacion = confirm("¿Los datos son correctos?");

// if (confirmacion) {
//   let dni = {
//     numero: numero,
//     nombre: nombre,
//     apellido: apellido,
//     fechaNacimiento: fechaNacimiento,
//     lugarNacimiento: lugarNacimiento,
//   };
//   console.log("Registro exitoso!");
//   console.table(dni);
// } else {
//   alert("Vuelva a intentarlo en 1 mes!");
// }

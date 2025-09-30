/* 

 Juego Piedra, Papel y Tijera

Crear un juego interactivo donde el usuario puede jugar contra 
la computadora.

Reglas:

 - Piedra vence a tijera
 - Tijera vence a papel
 - Papel vence a piedra
 - Si ambos elijen los mismo es empate

 Pasos para implementar:

 -  Definir la opciones del jugador
 -  Genera una opción aleatoria para la computadora.
-   Comparar estas opcionesy determinar el ganador.
-   Mostar el resultado

Estructuras a utilizar:

- Variables
- Condicionales
- Generación de un numero aletorio (Math.random)
- Operadores lógicos y de comparación
- Concatenación de cadena (strings)
- Plantillas literarias (template strings)
- Comentarios


*/


console.log("Estamos conectados y listos para programar!")

// 1. Variables - Opciones del jugador
const opcionJugador = prompt( "¡Para jugar escriba: piedra,  papel o tijera! " );  // piedra, papel o tijera

// 2. Opción de la computadora
const numeroAleatorio = Math.random(); // Genera un numero aleatorio entre 0 y 1 

let opcionComputadora; 

// 3. Condicional - Asignamos opción según el número aleatorio.
if (numeroAleatorio < 0.33) {
 opcionComputadora = "piedra";
} else if (numeroAleatorio < 0.66) {
 opcionComputadora = "papel";
} else {
  opcionComputadora= "tijera";
}

// 4. Mostrar las elecciones
console.log("🌑piedra, 🧻papel o 🪒tijera ");
console.log("Tu elección: " + opcionJugador);
console.log("La compu eligió: " + opcionComputadora);
console.log("-----------------------");

// Determinar el ganador a partir de condicionales 
let resultado;

if (opcionJugador === opcionComputadora) {
  resultado = `🤝¡EMPATE! ambos elijieron ${opcionJugador}`;   
} else if (opcionJugador === "piedra" && opcionComputadora === "tijera" ) {
  resultado = `🎊¡GANASTE piedra vence a tijera`; 
} else if (opcionJugador === "papel" && opcionComputadora === "piedra") {
  resultado = `🎊¡GANASTE! papel vence a piedra`;
} else if (opcionJugador === "tijera" && opcionComputadora === "papel") {
  resultado = `🎊¡GANASTE! tijera vence a papel`;
} else {
  resultado = "😮 ¡PERDISTE! La compu te ganó.";
}

// 6. Mostramos el resultado 

console.log(resultado);



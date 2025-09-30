/* 

Condicionales

Son estructuras de control que permiten ejecutar
diferentes bloques de código según una condición
(verdadera o falsa).  


1.  if 

Evalua una condición y si es verdadera, ejecuta el
bloque de codigo dentro de sus llaves.

Sintaxis:

if (condicion) {
  // bloqueo o código que se ejecuta
}

*/

let edad = 13;

if (edad >=18)  {
  // Codigo que se ejecuta:
   alert("Eres mayor de edad date! 😎")
}

/* 

 2. else 

  Permite ejecutar un bloque de codigo si la 
  condición es falsa. 

  Sintaxis:

  if (condicion) {
  //Codio que se ejecuta si la condición es
  verdadera.

} else }
  //código que se ejecuta si la condición es falsa.
  }

*/

let hora = 16;

if (hora <12) {
  console.log("Buendos días carnales 🌄");
} else {
  console.log("Buenas tardes bompacha 🌔");
}

/* 

 3. else if

 Nos va a permitir tener más de una condicón a ser evaluada.
 esta evaluación es en secuencia, si una condición es verdadera se
 ejecuta su bloque de código.

 Sintaxis 

 if (condicional) {
   //codigo que se ejecuta si es verdadera la condición.


} else if  (condicion2) {
  // codigo que se ejecuta si la anterior es falsa y esta
  condición es verdadera.

} else {
  // codigo que se ejecuta si ninguna de las anteriores es verdadera.


*/

let calificacion = 10;

if (calificacion >= 9) {
  console.log("Eres un excelente programador! 😯" );
} else if (calificacion >= 7) {
console.log("Ahi la llevas, ya casi te sale! 🤔 " );
} else if (calificacion >= 5) {
  console.log("Echale más ganitas o nos vemos en el extra! 😨" );
} else {
  console.log("Ya valio barriga, bienvenido al extra! 😫"); 
}


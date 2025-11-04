/* 

Funciones

Las funciones son bloques de código 
reutilizables que realizan una taza
específica. 

1.-  Función Declarada

Es la forma más común de definir funciones. Se puede
llamar a la función antes de su definición debido 
al hoisting, es decir que se "elevan" en el contexto de ejecución.

Sintaxis:

function nombreFuncion() {
  // Cuerpo de la función
  ...    
}

Llamada:

nombreFuncion();

*/


saludar();


function saludar() {
  console.log("Hola nariz de bola! 👃");
}


/* 

2. Funcion expresada (Anonimas)

Este tipo de funciones se asigna a una variable.
No pueden ser llamada antes de su definició,.

Sintaxis:

conts nombreConstante = function() {
  // Cuerpo de la función 
  . . .
}

Llamada:

nombreConstante(); 


*/


const despedir = function() {
   console.log("Adiós vaquero! 🦼")
}

despedir();

/* 

3.- Funciones Flecha (Arrow Function)

Tiene una sintaxis más consisa, son útiles para
ejecuciones cortas. Generalmente se asigna a una
variable.

Sintaxis:

const nombreConstante = () => {
  // Cuerpo de la función
  . . .
  } 

  Llamda:

  nombreConstante();

*/

const mensaje = () => {
  console.log("SOO, Ya muero de hambre 😫!");
}

mensaje();

/* 

Parámetros y Argumentos 

Las funciones pueden aceptar parámetros para 
recibir datos cuando son llamadas

Sintaxis:

Function nombreFuncion(parametro1, parametro2) {
   // Cuerpo de la función
   . . .
}

 Llamda:

 nombreFuncion(argumento1, argumento2); 

*/

function sumar(num1, num2) {
 console.log(`El resultado de la suma es: ${num1 + num2}`)
}

sumar(2, 3);
sumar(245, 674);
sumar(.45,.76);
sumar(2452352365,311313244);






function saludo(nombre) {
 console.log(`¡Hola ${nombre}! 😀 `)
}

saludo(`Esteban`);
saludo(`Yukio`);
saludo(`Diego`);
saludo(`Danna`);

/* 

Parametros por defecto

En las funciones podemos tener valores por defecto si no se 
proporciona argumentos al llamar a la función.

Sintaxis:

function nombre(parametro1 = valorDefault) {
// Cuerpo de la función
. . .
}

Llamada:

nombreFuncion( ); // usa los valores por defecto
nombreFuncion(argumento1) // usual valor del argumento


*/

const multiplicar = function(num1 = 1, num2 = 2) {
 console.log(`El resultado de multiplicar ${num1} por ${num2} es: ${num1*num2} ` )
}

multiplicar();
multiplicar(8, 5);
multiplicar(10, 46);
multiplicar();

/*  Crea una función que de la Bienvenida a un usuario
personalizando su nombre y que muestre un mensaje de invitado si
no se tiene el nombre del usuario.   */

const bienvenida = (usuario  = `invitado` ) => {
  if (usuario == `invitado`) {
    console.log(`Registrate o continua como invitado! 👉`)
  } else {
    console.log(`¡Bienvenido ${usuario}! 😀`)
  }
}

bienvenida();
bienvenida(`Julio`);
bienvenida(`Sherry`);
bienvenida(`Josh`);


/* 

 Valor de Retorno

 Las funciones pueden devolver un valor utilizando la palabra
 "return" 

 Sintaxis

 function nombreFunción() {
 // Cuerpo de la función
 . . .
 return valor;
 }

Llamada:

const nombreConstante = nombreFunción();

*/

function despedida(nombre = `Chris`) {
  return`Adiós ${nombre} ! 🖐`
}


const resultado = despedida(`Zoro`);

console.log(resultado);


/* 

Return Implicito

Las funciones flechas no nesita la palabra return, en su 
estructura más simple (una sola línea)

Sintaxis:

const nombreConstante = () => valor; 


*/

 const restar = (num1, num2) => num1 - num2;

 const resultadoResta = restar(10,5);

 console.log(resultadoResta);
 
 
 
 /* console.log(restar(10,5));  */

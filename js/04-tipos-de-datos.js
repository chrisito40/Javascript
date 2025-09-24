/* 

Tipos de Datos

Los tipos de datos son una clasificación de los diferentes
valores que podemos manejar en un lenguaje de programación.

En JS, existen varios tipos que se pueden agrupar en dos
categorias principales: primitivos y complejos u objetos.

Cada tipo de dato tiene sus propieas caracteristicas y usos
específicos en la programación.

1. Primitivos

Datos básicos que no se consideran "objectos" y no tienen "metodos".

👉Number o número

Representan valores numéricos ya sea enteros o decimales
(punto flotante).

Representa texto. El texto se coloca entre comillas dobles o simples: "texto"
'texto'. Se valen las dos, pero hay que ser consistentes.

👉Boolean o Booleanos

Representan un valor lógico que pueden 'true' 'false'.

👉Undefined o Indefinido

Es el valor que se asigna a una variable que ha sido 
declarada pero no inicializada.

👉Null o nulo

Representa la ausencia intencional de cualquier valor u objeto.
Es una tipo de dato que indica que una variable no tienen ningun 
valor asignado.

*/

/* Numbers */

let miNumero = 6; // Enteros
let miNumeroDecimal =  7.7; // Decimales

console.log(miNumero);
console.log(miNumeroDecimal)

/* Strings */

let miNombre = 'Christian';
let miApellido = 'Mani';

console.log(miNombre);
console.log(miApellido);

/* Boolean */

let esEstudiante = true;
let tieneTrabajo = false;

console.log(esEstudiante);
console.log(tieneTrabajo);

/* Undefined */ 

let aprobareDesarrolloApps; // Inicializar una variable 
console.log(aprobareDesarrolloApps);

/* Null */

let meQuiere = null;
console.log(meQuiere);

/* 

2. Complejos o de Objetos

👉Array o Arreglo

Es un conjuno de datos que se almacenan en una lista ordenada
de elementos. Los datos dentro de los arreglos se
escriben entre corchetes  [ ] y separados por comas ,

👉Object u Objeto

Es un conjunto de múltiples datos en pares 'clave' - 'valor'
Se escriben entre {} y separados por comas , 

👉 Functions o Funciones

Es un tipo de dato que puede ser "invocado". Se declaran
con la palabra reservada "function" y el código que se 
ejecuta va entre {"codigo"}


*/

/* Array  */

let misSeires = ['Stranger Things', 'Job Inside', 'Arcane'];
let misNumeros = [ 25, 9, 20, 4, 99 ];
let tutifruti = ['Omarcito', 225, true];

console.log( misSeires [2] ); // Arcane
console.log( misNumeros [4] ); // 99
console.log( tutifruti[1] ); //

/* Object */

let perro = {
  nombre: 'Firulais', 
  edad: 5,
  color: "negro",
  ladra: true,
  muerde: false
}

console.log( perro.nombre );
console.log( perro.edad );
console.log( perro.muerde );


/* Functions */

function saludar() {
  // Código a ejecutar 
  console.log("Hola mamá, estoy aprendiendo JS! 😀");
} 

// Llamamos a la función
saludar();
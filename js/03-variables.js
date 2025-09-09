/* 

Variables 

Las variables son contenedores que
almacendan datos. En JS, pueden declarar
variables utilizando las palabras clave
"var" "let" o "const" .

1. Declaración de Variables

👉 var: Es la forma más antigua de declarar
 variables. Tiene un alcance global o de 
 función y puede ser redeclarada y
 actualizada.

👉 let: Introducina en ES6, tiene un alcance 
de bloque y puede ser actualizada pero no 
redeclararse dentro del mismo alcance.

👉const: También introducida en ES6, tiene un 
alcance de bloque y no puede ser ni
redeclarada ni actualizada. Se utilizada para
valores que no deben cambiar. 


*/

/*  Declaración con var */

var nombre = "Christian";
console.log(nombre);  // Christian

nombre = "Marcito";  // Actualización 

/* Declaración con let */

let edad = 20;
console.log(edad);

edad = 21; // Actualización
console.log(edad);

/* Declaración con const */

const PI = 3.1416; 
console.log(PI);

PI = 4.4601; // ERROR de tipo. No se puede actualizar una constante.


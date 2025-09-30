/* 

 Concatenación de cadenas de texto

 Es el proceso de univer dos o más candenas de texto en una sola.
 Esto se hace utilizando el operador + o las plantillas literales 
 (template strings) se usan con backticks ' ' (acento invertido o 
 comillas agudas)

 

*/

let miNombre = "Christian";
let miApellido = "Mani";

// Usando el operador +

let nombreCompleto = miNombre  +  "" + miApellido;

console.log(nombreCompleto);

// usando plantillas literales

let nombreNuevo = "Mi nombre es ${miNombre} ${miApellido} y tengo ${10 * 3} años";

console.log(nombreNuevo);

/* 

Sii se utiliza el operador + con valores numericos se suman. Pero si se usa con cadenas de 
caracter se concatenan.

*/

let resultado = 5 + 10;

console.log(resultado); // 15

let resultadoDos = "5" + 10;

console.log(resultadoDos); // 510


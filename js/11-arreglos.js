/*  

   Arreglos 
  
   Un arreglo es un colección, es decir, una lista de elementos.

   En JS los arreglos se definen utilizando los coherentes [ ] y los elementos
   internos se separan por comas.

   Pueden contener el mismo tipo de dato o de diferentes tipos, incluyendo pueden 
   contener arreglos anidados.


*/

let frutas = ["manzana", "sandia" , "piña", "pera", "kiwi"];
let calificaciones = [10, 8, 4, 9 ];
let misDatos = ["Christian", 21, true];
let coordenadas = [  [1, 2, 3 ] , [4, 5, 6 ] , [7, 8, 9 ]  ] 



// lengtht  👉 Nos indica la cantidad de elementos que tenemos dentro del arreglo.


console.log(frutas);
console.log(calificaciones);
console.log(misDatos); 
console.log(coordenadas);
console.log(frutas.length); // Cantidad de elementos


/*
indice 👉 Nos indica la "posición" del elemento dentro del arreglo.

Para acceder a los elementos de un arrgelo utilizamos su índice. Los arreglos
siempre comienza con el índice 0.
*/

console.log("Mi fruta favorita es la " + frutas[1]+ "🍏");
console.log("Con limón saque " + calificaciones[2]+ " de calificación😫");
console.log("Me llamo " + misDatos[0]+ " años! ");
console.log("El siguiente dato esta en un arreglo anidado: " + coordenadas[1] [2]); 

/* 

 Métodos de los arreglos:

 push( ) 👉 Agrega uno o más elementos al final de arreglo.
 pop ( ) 👉 Elimina el último elemento del arreglo y lo devuelve.
 shit ( ) 👉 Elimina el primer elemento del arreglo y lo devuelve.
 unshift ( ) 👉 Agrega uno o más elementos al inició del arreglo.
 index0f( ) 👉 Devuelve el índice del primer elemento que coincida con el valor
 especificado o regresa -1 si no encuentras nanais. 


 */

 console.log(frutas.length); // 5

 frutas.push("uvas" , "papaya");

 console.log(frutas.length); // 7 

 let ultimaFruta = frutas.pop();

 console.log(frutas.length); // 6
 console.log(ultimaFruta); //papaya

 let primeraFruta = frutas.shift();

 console.log(frutas.length) // 5
 console.log(primeraFruta) // Manzana 

frutas.unshift("maracuyá" , "fresa" , "mango");

console.log(frutas.length); // 8
frutas.push("mango")

let indecFruta = frutas.indexOf("mango");

console.log(indecFruta)


/* 

 Iteración sobre arrays

 Tomamos una lista de datos y accedemos a sus datos, a través de un bulce.


*/

frutas.unshift("pitajaya" ,  "caguama")

for (i = 0; i < frutas.length; i++) {
  console.log("se me antojo una " + frutas[i]);
}


/* 

Bucles 

Son estructuras de control que permiten repetir un bloque de
código varias veces, hasta que se cumpla una condición específica.

Los más comunes en JS son for, while y do. . . while

1.- Bucle for

El bucle se utiliza cuando sabemos cuantas veces queremos repetir 
un bloque de codigo. La sitaxis es:

for (inicialización; condición; incremento) {
  //el código que se va a repetir su ejecución
  . . .
}

inicialización 👉 variable con un valor inicial 
condición 👉 se evalua una expresión si es true se ejecuta el bucle 
incremento 👉aumenta  el valor de la variable en cada iteración


*/

for (let i = 0;  i < 10; i++) {
  console.log("Repetición " + i + ": Oye Apa, Papá se fue! 🤔" )
}

/*

2. Bucle while

El bucle while se utiliza cuando no sabemos cuántas veces
queremos repetir un bloque de código, pero si queremos que se 
repita mientras una condición es verdadera. Sintaxis.

inicialización

while (condición) {
 // código que se repite su ejecución 
 incremento
}



*/


let j = 0; // inicialización

while (j < 5) {
  // Codigo a ejecutar en bucle 
  console.log(j);
  j++; // incrementar
}

/* 

 3. Bucle do. . .while 

 Este bucle es similar al bucle while, pero garantiza que el 
 bloque de código se ejecuta al menos una vez. Ya que la
 condición se evalua después de la ejecución.

inicialización

 do {
    // Código que se ejecuta al menos una vez
    incremento
    } while (condición);

  

  */

    let k = 0;

    do {
      console.log("Twice son las mejore 😸 ");
     k++;
    } while (k <5);

    
/* 

Objectos


Son colecciones de propiedades. Una propiedad es una asociación entre un
nombre (clave o key) y un valor (value).

Los valores pueden ser de distintos tipos numeros, cadenas de texto,
boleanos, arreglos, funciones. . .

Sintaxis:

nombreObjeto = {
   // Propiedades
   clave1: valor,
   clave2: valor,
   clave3: valor,
}

*/

const persona = {
    nombre: "Christian",
    apellido: "Meléndez",
    edad: 21,
    esInvitado: false, // Boleano verdadero o falso
    mounstros: ["Zombie", "Hombre Lobo", "Charro Negro" ],
    
   saludar: function( ) {
    /* This es una palabra reservada  que autoreferencia al objecto  */
     console.log("Hola mi nombre es "  + this.nombre + " y me gusta " + this.mounstros[0]);
   }
  };

 // Mostrando el objecto en la consola
  console.log(persona)

/* 

 Acceder  a las propiedades de un objecto utilizamos la notación de punto o corchetes.

 objecto.clave👉 notación de punto
 objecto [clave]👉 notación de corchetes

*/


console.log(persona.nombre);
console.log(persona["apellido"]);

// Concatenamos Valores

console.log("Hola mi nombre es " + persona.nombre + " " + persona.apellido + " y tengo "+ persona.edad +  " años" )

  // Plantilla Literales  -> Alt + 96

  console.log(`Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años😯`);

  // Acceder al booleno

  console.log(persona.esInvitado);

 if(persona.esInvitado) {
  console.log("Puede pasar y disfruta del Halloween de Enfoco");
  } else {
   console.log("No puedes pasar, regresate a tu casaita!");
 }

 // Acceder al array

 console.log(persona.mounstros[2]);

// Reto 2

console.log(`Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años e iré al halloween disfrazado de ${persona.mounstros[2]} 👻`);

/* 

Metodos de los objectos.

Los métodos son funciones que están asociadas a un objecto. Se pueden llamar utilizando la notación 
de punto.

objecto.metodo()

*/

console.log( persona.saludar( ) );  // Así no accedemos a los métodos.  

persona.saludar( ); // Esta es la forma de acceder a los métodos.



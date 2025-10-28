
/* 

Las clases JS son una forma de definir objectos, sus propiedades 
y métodos, creando un prototipo del cual se generaran varios 
objectos, heredando su comportamiento.

Los nombres de las clases comienzan con mayúscula.

Sintaxis

class nombreObjeto {
 // Utilizamos el método constructor  especial para inicializar objetos.

 constructor(prop1, prop2) {
 this.key = prop1; 
 this.key = prop1; 
  }


 }

*/

class Persona {
  // Método constructor
  constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
  }


// Otros Métodos
saludar( ) {
  alert(`Hola soy ${this.nombre} y tengo ${this.edad} años! 🖐` )
  }
}

/* 

    Crear instancias  de la clase

Vamos a utilizar una constante y crear una nueva instancia con 
la siguiente sintaxis:

 const nombreConstante = new NombreClase(prop1, prop2) 



*/

const persona1 = new Persona(`Pedro`, 23);
const persona2 = new Persona(`Mario`, 28);
const persona3 = new Persona(`Albertano`, 20);

/* Mostramos objetos  por consola */

console.log(persona1);
console.log(persona2);
console.log(persona3);

/* Accedemos a los datos */

console.log(`El es ${persona1.nombre} y tiene ${persona1.edad}. `);
console.log(`El es ${persona2.nombre} y tiene ${persona2.edad}. `);
console.log(`El es ${persona3.nombre} y tiene ${persona3.edad}. `);

/* Llamos el método saludar de cada objecto */

persona1.saludar();
persona2.saludar();
persona3.saludar();




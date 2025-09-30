/* 

  Switch

Es una sentencia que se utilizan para realizar
diferentes acciones segun distintas condiciones.

Se suele usar como forma alternativa a multiples
sentencias if-else cuando se tiene una sola
variables que puede tomar distintos valores.

Sintaxis

switch (expresión) {
 // Casos según se comparen 

     case valor1;
     // El código a ejecutar
     break;
     case valor2:
      // El código a ejecutar
     break;
     case valor3;
     // El código a ejecutar
     break;
     default:
    // Este es el código que se ejecuta si la expresión no
    coincide con ningun caso.
    break; // Esto es opcional
  }


*/

// Variable a evaluar
let licenciatura = prompt("Escribe la licenciatura que te interesa: televisión, diseño o consultoría "); // television, diseño o consultoría 

switch (licenciatura) {
  case "televisión":
    console.log("📺Haz elegido la Licenciatura de Televisión, que mal por ti !");
    break;
  case "diseño":
    console.log("🎨Haz elegido la Licenciatura de Diseño, serás mu fregón !");
    break;
  case "consultoría":
    console.log("💅Haz elegido la Licenciatura de consultoría, serás muy nice !");
    break;
  default: 
      console.log("🥠Estas loquito!")
  }


//Hagan que el usuario ingrese el nombre de la licenciatura


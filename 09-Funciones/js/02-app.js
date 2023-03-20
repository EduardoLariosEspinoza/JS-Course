// La diferencia entre estas dos formas de crear una funcion, es que si mandas a llamar dicha funcion antes de crearla, en la declaracion todo funcionara bien mientras que en la expresion de funcion no funcionara.
// Hoisting: JavaScript da dos vueltas al programa a la hora de ejecutar, en la primera registra las variables y funciones y en la segunda ejecuta, pero como en la expresion de funcion, dicha funcion esta identificada como variable const, no se guarda como funcion y por lo tanto no se puede acceder.

sumar();

// Declaracion de funcion
function sumar() {
  console.log(2 + 2);
}


//sumar2();

// Expresion de funcion
const sumar2 = function() {
  console.log(3 + 3);
}
// Object literal, mas comunes pero no son reutilizables

const cliente = {
  nombre: 'Juan',
  saldo: 300
};

console.log(cliente);

// Object constructor, permite crear objetos dinamicos y reutilizables
function Cliente(nombre, saldo) {

  // Debes colocar el this para declarar que es un atributo
  this.nombre = nombre;
  this.saldo = saldo;

}

const jose = new Cliente('Jose', 500);

console.log(jose);
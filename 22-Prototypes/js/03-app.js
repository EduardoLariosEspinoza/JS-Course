function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

// Creamos un prototipo que es una funcion que solo funciona con los objetos que sean Clientes
Cliente.prototype.tipoCliente = function() {
  // Se debe usar function() y no un array function porque si quieres acceder a un dato del objeto se debe usar this.info, function busca en el objeto local mientras que un array function busca en la ventana global por lo que marca undefind

  let tipo;
  const { saldo } = this;

  // Un prototype mantiene la referencia al objeto

  if (saldo >= 10000) {
    tipo = 'Gold';
  } else if (saldo >= 5000) {
    tipo = 'Platino';
  } else {
    tipo = 'Normal';
  }

  return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
  const { nombre, saldo } = this;
  return `El cliente ${nombre} tiene ${saldo} dolares y es de la categoria de ${this.tipoCliente()}`; // Con this puedes hacer referencia a propiedades del objeto o a prototipos de este
}

Cliente.prototype.retirarsaldo = function(retiro) {
  this.saldo -= retiro;
}

// Instansiar === Crear una instancia
const juan = new Cliente('Juan', 6000);

// Se coloca asi la funcion porque esta está ligada al objeto, por lo que se pone como si fuera un metodo con la sintaxis de punto
console.log(juan.tipoCliente());
console.log(juan.nombreClienteSaldo());

juan.retirarsaldo(1000);
console.log(juan.nombreClienteSaldo()); // Volvemos a llamar a la funcion de informacion para mostrar que retiramos dinero

console.log(juan);
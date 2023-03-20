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

function Persona(nombre, saldo, telefono) {

  // Le hereda las propiedades de Cliente con los valores que pasamos como constructores
  Cliente.call(this, nombre, saldo)
  this.telefono = telefono;
}

// Para heredar una funcion debes hacerlo antes de hacer una instancia ya que si no la instancia se crea antes de heredarle el prototype

// Object.create es una funcion creada para copiar el prototype de otro objeto
Persona.prototype = Object.create(Cliente.prototype)

// Heredamos el constructor de Cliente ya que se elimina el de Persona al copiar el prototype de Cliente
Persona.prototype.constructor = Cliente;

// Instanciar
const juan = new Persona('Juan', 5001, 3124206969);
console.log(juan);
console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function() {
  return `Su numero es ${this.telefono}`;
}

// Esta funcion esta disponible para objetos Persona peo no para objetos Clientes ya que heredamos de Cliente a Persona pero no viceversa. God Object
console.log(juan.mostrarTelefono());
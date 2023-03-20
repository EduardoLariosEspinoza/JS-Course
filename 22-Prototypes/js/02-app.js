function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);

function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;

  return `El cliente ${nombre} tiene ${saldo} dolares`;
}

function formatearEmpresa(empresa) {
  const { nombre, saldo, categoria } = empresa;

  return `El cliente ${nombre} tiene ${saldo} dolares y es de la categoria de ${categoria}`;
}

console.log(formatearCliente(juan));

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const CCJ = new Empresa('Curso js', 5000, 'Cursos');

console.log(formatearEmpresa(CCJ));
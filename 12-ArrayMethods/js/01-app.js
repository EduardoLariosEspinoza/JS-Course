const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un array normal

// Con forEach, forma manual
/* meses.forEach(mes => {
  if (mes === 'Enero') {
    console.log(true);
  }
}); */

// Con .includes
const comprobar = meses.includes('Enero');
console.log(comprobar); // True

// Tambien funciona con .some
const comprobarMes = meses.some((mes) => mes === 'Enero') // Regresa el valor de la comparacion, si encuentra el mes enero regresa true
console.log(comprobarMes);


// Comprobar si un valor existe en un array de objetos

const comprobarNombre = carrito.some((objeto) => objeto.nombre === 'Teclado');
console.log(comprobarNombre);

// .includes para arrays normales y .some para array de objetos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

// Encontrar el indice de un valor del array

// Con forEach, forma manual
meses.forEach((mes, index) => {
  if (mes === 'Marzo') {
    console.log(index); // 2
  }
});

const obtenerIndex = meses.findIndex((mes) => mes === 'Marzo');
console.log(obtenerIndex); // 3


const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = array1.findIndex((element) => element > 13);
console.log(isLargeNumber); // 3
// Solo devuelve el primer indice donde se cumpla la condicion, si hay mas de una que lo cumpla solo se imprime la primera que lo haga.



const obtenerIndex2 = carrito.findIndex((objeto) => objeto.precio === 300);
console.log(obtenerIndex2); // 3
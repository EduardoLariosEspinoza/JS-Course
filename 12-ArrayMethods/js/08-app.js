const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

const meses2 = [...meses, 'Agosto'];
console.log(meses2); // Agregar otro mes

const palabra = [...
  'Agosto'
];
console.log(palabra); // ['A', 'g', 'o', 's', 't', 'o']

const objeto = { nombre: 'Mouse', precio: 100 };

const carrito2 = [...carrito, objeto]
console.log(carrito2); // Imprime el objeto carrito junto con los valores del objeto agregado
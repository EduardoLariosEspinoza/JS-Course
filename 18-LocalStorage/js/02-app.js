const nombre = localStorage.getItem('nombre');
console.log(nombre);

const inexistente = localStorage.getItem('inexistente');
console.log(inexistente); // null

const producto = localStorage.getItem('producto');
console.log(producto); // string
console.log(JSON.parse(producto)); // Convierte un string en un objeto o array si tiene la forma adecuada
//console.log(JSON.parse(nombre)); // error

const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log(mesesArray);
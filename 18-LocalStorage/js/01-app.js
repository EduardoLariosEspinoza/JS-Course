// localStorage.setItem(llave, valor);
localStorage.setItem('edad', 36); // LocalStorage solo guarda strings, convierte los datos a strings
localStorage.setItem('edad', 21);
// Funciona igual que localStorage pero cuando cierras la pestaña se borra
sessionStorage.setItem('nombre', 'eduardo');

const producto = {
  nombre: "tv",
  precio: 23
}

const meses = ['enero', 'febrero'];

// localStorage.setItem('producto', producto); // [Object,Object]

// Transformar un objeto o array en un string
const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString); // {nombre: "tv", precio: 23}

// Transformarlo al momento de guardarlo
localStorage.setItem('meses', JSON.stringify(meses)); // ["enero", "febrero"]
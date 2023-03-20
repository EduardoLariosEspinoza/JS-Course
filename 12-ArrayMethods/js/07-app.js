const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre'];

const resultado = meses.concat(meses2, meses3, 'Diciembre');
console.log(resultado); // ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

// Se crea un array que tenga una copia de todos los elementos dentro de los arrays introducidos y se le agrega un string que sera un elemento del array
const resultado2 = [...meses, ...meses2, ...meses3, 'Diciembre'];
console.log(resultado2); // ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

// Se crea un array que tiene dentro los arrays introducidos, no su contenido si no el array en si
const resultado3 = [meses, meses2, meses3, 'Diciembre'];
console.log(resultado3); // [Array(7), Array(2), Array(2), 'Diciembre']
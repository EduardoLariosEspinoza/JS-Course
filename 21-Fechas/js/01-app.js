const diaHoy = new Date();
const dia = new Date('1-18-2002'); // o new Date('January 18 2002')

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear();

// Enero = 0, Febrero = 1, etc
valor = diaHoy.getMonth();

valor = diaHoy.getMinutes();
valor = diaHoy.getHours();

// Milisegundos que han pasado desde el 1 de enero de 1970
valor = diaHoy.getTime();

diaHoy.setFullYear(2010);

console.log(valor);
console.log(diaHoy);
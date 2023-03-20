// https://momentjs.com/

const diaHoy = new Date();

// Poner en español las fechas de la libreria
moment.locale('es');

// Meses, dias, años y hora mostradada con un formato que puedes ver en la pagina de la libreria
console.log(moment().format('MMMM Do YYYY h:mm:ss'));

console.log(moment().format('LLLL', diaHoy));

// Agregar tres dias a la fecha actual
console.log(moment().add(3, 'days').calendar());
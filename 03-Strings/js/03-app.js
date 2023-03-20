const producto = "Monitor de 20 pulgadas";
const precio = "98 dólares";

/* console.log(producto.concat(precio));
console.log(producto.concat(" Texto"));
*/

//Se complica cuando tienes muchas cadenas y variables
//console.log('El producto: ', producto, '. Tiene un precio de ' + precio); // "+" o ","

//La mejor forma de concatenar
console.log(`El producto ${producto} tiene un precio de ${precio}`);
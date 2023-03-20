const producto = "Monitor de 20 pulgadas";

//Reemplazar texto en una cadena
console.log(producto.replace(' pulgadas', '"'));
console.log("\n")

//Cortar un pedazo de una cadena
//.splice
console.log("Splice")
console.log(producto.slice(0, 3));
console.log(producto.slice(9));
console.log(producto.slice(4, 3)); //No hace nada porque los numeros estan en el orden incorrecto

//.substring 
//La diferencia es que esta si funciona aunque el orden de los numeros sea incorrecto, los intercambia para que esten ordenados
console.log("\nSubstring")
console.log(producto.substring(0, 3));
console.log(producto.substring(9));
console.log(producto.substring(4, 3));

//charAt Se usa si solo quieres cortar una letra
console.log("\ncharAt")
console.log(producto.charAt(0));
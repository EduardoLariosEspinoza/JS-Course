//Capar string con "\"
const producto = "Monitor 20\""

//No necesitas capar porque el string empieza y cierra con ', entonces no hace caso a las "
const producto2 = String('Monitor 24" ');

// Crea un objeto (Con sus posiciones) que es un string --> 0:"S", 1:"t", 2:"r", 3:i, 4:n, 5:"g", 6:"3"
const producto3 = new String('String3');
//No se crea una variable, se crea un objeto

console.log(producto);
console.log(producto2);
console.log(producto3);
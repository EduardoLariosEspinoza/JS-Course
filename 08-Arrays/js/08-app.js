const arreglo = [10, 20, 30, 40, 50, 60];

// Extraer el valor de una propiedad o variable dentro de un arreglo y guardarlo en una variable fuera del mismo
// Destructuring
// Queremos hacer destructuring al primer valor, no nos interesa el segundo y el tercero, y queremos que de los numeros que quedan hagas un arreglo
const [primero, , , ...cuarto_al_ultimo] = arreglo;

console.log(arreglo); //El arreglo sigue igual
console.log(primero); // primero = 10
console.log(cuarto_al_ultimo); // cuarto_y_quinto = [40, 50, 60]
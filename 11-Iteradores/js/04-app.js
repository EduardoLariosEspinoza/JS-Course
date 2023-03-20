let numero = prompt('Ingresa un numero');
let i = 0;

while (i <= numero) {

  if (i % 2 === 0) {
    console.log(`El numero ${i} es par`);
  }
  if (i % 2 !== 0) {
    console.log(`El numero ${i} es impar`);
  }

  i++;
}
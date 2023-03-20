let numero = prompt('Ingresa un numero');

for (let i = 1; i < numero; i++) {

  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} = FizzBuzz`);
    continue;
  }

  if (i % 3 == 0) {
    console.log(`${i} = Fizz`);
  }
  if (i % 5 == 0) {
    console.log(`${i} = Buzz`);
  }
}
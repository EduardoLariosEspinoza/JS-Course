//Redondea hacia abajo
let math;
math = Math.floor(4.6);
console.log("Redondeo hacia abajo de 4.6: ", math);

//PI
math = Math.PI;
console.log('Pi: ', math);

//Redondea. Si termina en .5 redondea hacia arriba
math = Math.round(2.6);
console.log("Redondeo de 2.6: ", math);
math = Math.round(2.4);
console.log("Redondeo de 2.4: ", math);
math = Math.round(2.5);
console.log("Redondeo de 2.5: ", math);

//Redondea hacia arriba
math = Math.ceil(2.2);
console.log("Redondeo hacia arriba de 2.2: ", math);

//Raiz cuadrada
math = Math.sqrt(121);
console.log("Raiz cuadrada de 121: ", math);

//Sacar valor absoluto de un numero (Valor sin signo)
math = Math.abs(-25);
console.log("Valor absoluto de -25: ", math);

//Potencia de un numero. pow(Numero, elevado a la)
math = Math.pow(2, 3);
console.log("2^3 = ", math);

//Valor minimo
math = Math.min(2, 5, 9, 1);
console.log("Valor minimo de los introducidos: ", math);

//Valor maximo
math = Math.max(2, 5, 9, 1);
console.log("Valor maximo de los introducidos: ", math);

//Numero random. Da numeros entre 0 y 1
math = Math.random();
console.log("Numero random: ", math);

//Valor random entre 0 y 30 redondeado para evitar decimales
math = Math.random();
console.log("Valor random entre 0 y 30: ", Math.floor(math * 30));
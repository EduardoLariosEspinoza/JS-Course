function sumar(valor1, valor2) { // Parametros = Variable usada para recibir valores
  let resultado;
  resultado = valor1 + valor2;
  console.log(resultado);
}

let num1 = 5;
let num2 = 2;

sumar(num1, num2); // Argumentos = Valores enviados a una estructura

function saludar(nombre, apellido) {
  if (nombre == undefined) {
    console.log("No hay datos");
  } else if (apellido == undefined) {
    console.log("No hay datos");
  } else {
    console.log(`Hola ${nombre} ${apellido}`);
  }
}

saludar('nombre', 'apellido');
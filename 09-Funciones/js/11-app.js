const funNormal = function(lenguaje, lenguaje2) {
  console.log(`Lenguajes: ${lenguaje}, ${lenguaje2}`);
}

funNormal("JavaScript", "C"); // Lenguajes: javaScript, C
// Es lo mismo que

// Si solo colocas un parametro los parentesis son obligatorios
const arrowFun = (lenguaje, lenguaje2) => { // Si es una sola linea se puede no colocar las llaves
  console.log(`Lenguajes: ${lenguaje}, ${lenguaje2}`); // Si solo tienes una sola linea se da por implicito el return
}

arrowFun("JavaScript", "C"); // Lenguajes: javaScript, C
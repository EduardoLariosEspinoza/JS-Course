const funNormal = function() {
    console.log("Funcion normal");
  }
  // Es lo mismo que
const arrowFun = () => { // Si es una sola linea se puede no colocar las llaves
  console.log("Arrow Function"); // Si solo tienes una sola linea se da por implicito el return
}

arrowFun();
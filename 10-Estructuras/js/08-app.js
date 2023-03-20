const autenticado = true

if (autenticado) {
  console.log("Estas autenticado");
}

let puntos = 450;

function puntaje(puntos) {
  if (puntos > 400) {
    console.log('Muy buen puntaje');
    return; // Ya no pasa por el resto de la estructura en la que esté si se lee un return
  } // return en lugar de usar un else if

  if (puntos > 300) {
    console.log('Buen puntaje');
    return;
  }
}

puntaje(puntos);
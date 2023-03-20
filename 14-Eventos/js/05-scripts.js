// El objeto window representa la ventana que contiene un documento DOM
window.addEventListener("scroll", () => {

  // Ver el numero de pixeles que has escrolleado, si bajas aumentan y si subes se vuelven menos
  //const scrollPX = window.scrollY;
  //console.log(scrollPX);

  const premium = document.querySelector('.premium');
  const ubicacion = premium.getBoundingClientRect(); // Devuelve informacion del elemento: el tamaño del objeto y su ubicacion respecto al viewport o ventana de visualizacion
  //console.log(ubicacion); // Se recomienda imprimir esto para ir haciendo pruebas y ver cuando ya es visible y en que posicion respecto al viewport

  if (ubicacion.top < 1000) {
    console.log('El elemento ya es visible');
  } else {
    console.log('Todavia no se ve');
  }
});
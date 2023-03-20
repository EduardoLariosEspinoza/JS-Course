const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 349,
  disponible: false,
  mostrarInfo: function() {
    //Con this especificamos que busque la variable nombre dentro de ESTE objeto y no busque afuera
    console.log(`El producto de ${this.nombre} tiene un precio de ${this.precio}`);
  }
}

producto.mostrarInfo();
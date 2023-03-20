const producto = {
  //Llave: Valor
  nombre: "Monitor 24 pulgadas",
  precio: 349,
  disponible: true,
}

//Añadir propiedad al objeto
producto.imagen = "Imagen.jpg";

//Eliminar propiedad del objeto
delete producto.disponible;

console.log(producto);
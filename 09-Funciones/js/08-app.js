// Se van aretornar valores de una funcion, siempre y cuando vayas a hacer algo con el valor que se regresa, de otra forma simplemente haces la accion necesaria dentro de la propia funcion

let total = 0

function agregarCarrito(precio) {
  return total += precio;
}

function agregarImpuesto(total) {
  return total * 1.15; //Regresar el total con el 15% de impuesto
}

total = agregarCarrito(200);
total = agregarCarrito(100);
total = agregarCarrito(400);
total = agregarCarrito(100);

console.log(`El precio total de los productos es de ${total}`);

let totalPagar = agregarImpuesto(total);

console.log(`El precio total con impuestos es de ${totalPagar}`);
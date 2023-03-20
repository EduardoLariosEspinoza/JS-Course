const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 349,
  disponible: true,
  informacion: {
    medidas: {
      peso: "2kg",
      medida: "1m",
    },
    procedencia: {
      pais: "China",
      empresa: "HyperX",
    },
  }
}

const { procedencia } = producto.informacion
console.log(procedencia);

const { nombre, informacion, informacion: { medidas, medidas: { peso } } } = producto;
console.log(nombre);
console.log(informacion);
console.log(medidas);
console.log(peso);
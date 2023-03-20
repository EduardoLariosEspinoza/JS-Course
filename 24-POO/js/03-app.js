class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  // Se manda a llamar con la instancia, cliente.mostrarInformacion()
  mostrarInformacion() {
    return `Hola ${this.nombre} saldo de ${this.saldo}`;
  }

  // No pertenece a la instancia, pertenece al objeto. Se manda a llamar con la clase, Cliente.bienvenida()
  static bienvenida() {
    return `Estatica`;
  }

}

// Heredar de un constructor padre los atributos nombre y saldo
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    // Llama al constructor padre
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }

  mostrarInformacion() {
    return `Hola ${this.nombre} de ${this.categoria}`;
  }

  static bienvenida() {
    return `Estatica empresa`;
  }
}

const cliente = new Cliente('juan', 300);
const empresa = new Empresa('Redbull', 10000, 31200000, 'Bebidas');
console.log(empresa.mostrarInformacion());
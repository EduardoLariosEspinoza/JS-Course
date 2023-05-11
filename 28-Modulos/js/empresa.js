import { Cliente } from "./cliente.js";

export class Empresa extends Cliente {
  constructor(nombre, saldo, tipo) {
    super(nombre, saldo);
    this.tipo = tipo;
  }

  mostrarInformacion() {
    return `La empresa ${this.nombre} tiene un saldo de ${this.saldo} y es de tipo ${this.tipo}`;
  }
}

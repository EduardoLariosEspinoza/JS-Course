// Mantener las variables en privado para este modulo (no se puede acceder desde otro archivo)
/* (function () {
  console.log("Desde IIFE");
  const nombreCliente = "Juan";
  //console.log(nombreCliente);
  //window.nombreCliente = "Juan"; // Se puede acceder desde otro archivo
})(); */

export const nombreCliente = "Juan";
export const ahorro = 200;

export function mostrarInformacion(nombre, saldo) {
  return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

export function tieneSaldo(saldo) {
  if (saldo > 0) {
    console.log("Si tiene saldo");
  } else {
    console.log("No tiene saldo");
  }
}

export class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `El cliente ${this.nombre} tiene un saldo de ${this.saldo}`;
  }
}

// Solo puede haber un export default por archivo
// Puedes declararlo sin nombre y llamarlo con el nombre que quieras
export default function nuevaFuncion() {
  console.log("Este es el export default");
}

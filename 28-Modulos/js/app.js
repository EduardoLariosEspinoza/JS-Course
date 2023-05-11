// Aunque puedas poner un alias, lo mejor es que el nombre de la variable sea el mismo que en el export
import alias, {
  nombreCliente as nombreCl,
  ahorro,
  mostrarInformacion,
  tieneSaldo,
  Cliente,
} from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(nombreCl);
console.log(ahorro);

console.log(mostrarInformacion(nombreCl, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCl, ahorro);
console.log(cliente);

console.log(cliente.mostrarInformacion());

const empresa = new Empresa("Empresa1", 10000, "Construccion");
console.log(empresa);
console.log(empresa.mostrarInformacion());

// Es nuevaFuncion pero con otro nombre
alias();

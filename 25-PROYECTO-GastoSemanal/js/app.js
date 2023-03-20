// Variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

// Eventos
eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
  formulario.addEventListener("submit", agregarGasto);
}

// Clases
class Presupuesto {

  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    console.log(this.gastos);
  }
}

class UI {
  insertarPresupuesto(cantidad) {

    const { presupuesto, restante } = cantidad;

    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center', 'alert');

    if(tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }

    divMensaje.textContent = mensaje;

    document.querySelector('.primario').insertBefore(divMensaje, formulario);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  agregarGastoListado(gastos) {
    console.log(gastos);
  }
}


const ui = new UI();
let presupuesto;

// Funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt('Cual es tu presupuesto?');

  //console.log(Number(presupuestoUsuario));
  Number(presupuestoUsuario)

  // Nan = Not a Number
  if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || preguntarPresupuesto <= 0) {

    // Recargar la pagina
    window.location.reload();
  }

  presupuesto = new Presupuesto(presupuestoUsuario);

  ui.insertarPresupuesto(presupuesto);

}

function agregarGasto(e) {
  e.preventDefault();

  // Leer los datos del formulario
  const nombre = document.querySelector('#gasto').value;
  const cantidad = Number( document.querySelector('#cantidad').value);

  if(nombre === '' || cantidad === '') {
    ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
    return;
  }

  if(cantidad < 0 || isNaN(cantidad)) {
    ui.imprimirAlerta('Cantidad no valida', 'error');
    return;
  }

  // Generar un objeto con el gasto
  const gasto = { nombre, cantidad, id: Date.now() }; // nombre: nombre == nombre, porque se llaman igual y js lo entiende asi
  
  presupuesto.nuevoGasto(gasto);
  ui.imprimirAlerta('Gasto agregado correctamente');

  const { gastos } = presupuesto;
  ui.agregarGastoListado(gastos);

  formulario.reset();
}
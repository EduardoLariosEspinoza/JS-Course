// Constructores

function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function() {
  /*
    Americano == 1 == x1.15
    Asiatico == 2 == x1.05
    Europeo == 3 == x1.35
  */

  let cantidad;
  const base = 2000;

  switch (this.marca) {
    case "1":
      cantidad = base * 1.15;
      break;
    case "2":
      cantidad = base * 1.05;
      break;
    case "3":
      cantidad = base * 1.35;
      break;

    default:
      break;
  }

  // Restar 3% por cada año de antiguedad del auto
  const diferencia = new Date().getFullYear() - this.year;

  // Regla de tres. Si cien es igual a cantidad, a cuanto es igual 3
  const tresPorcentaje = cantidad * 3 / 100;
  cantidad -= diferencia * tresPorcentaje;

  if (this.tipo === 'basico') {
    cantidad *= 1.3;
  } else {
    cantidad *= 1.5;
  }

  return cantidad;
}

function UI() {}


// Llenar las opciones de año
UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear();
  const min = max - 20;

  const selectYear = document.querySelector("#year");

  for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i;

    selectYear.appendChild(option);
  }
}

// Mostrar alertas
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
  const div = document.createElement('div');

  if (tipo === 'error') {
    div.classList.add('error');
  } else {
    div.classList.add('correcto');
  }

  div.classList.add('mensaje');
  div.textContent = mensaje;

  const formulario = document.querySelector("#cotizar-seguro");
  formulario.insertBefore(div, document.querySelector('#resultado'));

  setTimeout(() => {
    div.remove();
  }, 3000);
}

UI.prototype.mostrarResultado = (total, seguro) => {
  const { marca, year, tipo } = seguro;
  let textoMarca;

  switch (marca) {
    case '1':
      textoMarca = 'Americano';
      break;
    case '2':
      textoMarca = 'Asiatico';
      break;
    case '3':
      textoMarca = 'Europeo';
      break;

    default:
      break;
  }

  const div = document.createElement('div');
  div.classList.add('mt-10');

  div.innerHTML = `
    <p class='header'>Tu resumen</p>
    <p class="font-bold">Marca:<span class="font-normal"> ${textoMarca}</span></p>
    <p class="font-bold">Año:<span class="font-normal"> ${year}</span></p>
    <p class="font-bold">Tipo:<span class="font-normal capitalize"> ${tipo}</span></p>
    <p class="font-bold">Total:<span class="font-normal"> ${total}</span></p>
  `

  const resultado = document.querySelector('#resultado');

  const spinner = document.querySelector("#cargando");
  spinner.style.display = 'block';

  setTimeout(() => {
    spinner.style.display = 'none';
    resultado.appendChild(div);
  }, 3000);
}

// Agregar instancia. Se agrega afuera del eventListener porque se usara en varios lugares del codigo por lo que debe de estar disponible
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
  ui.llenarOpciones();
});

eventListeners();

function eventListeners() {
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e) {
  e.preventDefault();

  const marca = document.querySelector("#marca").value;
  const year = document.querySelector("#year").value;

  // Ver el valor de el radiobuttom con el name = tipo, seleccionado
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  if (marca === '' || year === '' || tipo === '') {
    ui.mostrarMensaje('ta mal', 'error');
    return;
  }

  ui.mostrarMensaje('ta bien', 'correcto');

  const resultados = document.querySelector("#resultado div");
  if (resultados != null) {
    resultados.remove();
  }

  // Instanciar seguro
  const seguro = new Seguro(marca, year, tipo);

  // Realizar cotizacion
  const total = seguro.cotizarSeguro();

  ui.mostrarResultado(total, seguro)

}
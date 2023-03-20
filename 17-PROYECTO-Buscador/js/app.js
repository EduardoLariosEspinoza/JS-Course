// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',
};

// Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(autos);

  llenarSelect();
})

// Cada vez que cambie la opcion en el select
marca.addEventListener('change', e => {
  datosBusqueda.marca = e.target.value;

  filtrarAuto();
});

year.addEventListener('change', e => {
  datosBusqueda.year = parseInt(e.target.value);

  filtrarAuto();
});

minimo.addEventListener('change', e => {
  datosBusqueda.minimo = e.target.value;

  filtrarAuto();
});

maximo.addEventListener('change', e => {
  datosBusqueda.maximo = e.target.value;

  filtrarAuto();
});

puertas.addEventListener('change', e => {
  datosBusqueda.puertas = parseInt(e.target.value);

  filtrarAuto();
});

transmision.addEventListener('change', e => {
  datosBusqueda.transmision = e.target.value;

  filtrarAuto();
});

color.addEventListener('change', e => {
  datosBusqueda.color = e.target.value;

  filtrarAuto();
});

// Funciones
function mostrarAutos(autos) {
  limpiarHTML();

  autos.forEach(auto => {
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;
    const autoHTML = document.createElement('p');

    autoHTML.textContent = `${marca} ${modelo} ${year} - $${precio} - ${puertas} puertas - ${color} - ${transmision}`;

    resultado.appendChild(autoHTML);
  })
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement('option');

    opcion.value = i;
    opcion.textContent = i;

    year.appendChild(opcion);
  }
}

function filtrarAuto() {

  // Con filter se itera con cada elemento del array autos, si se returna un valor de true con una iteracion entonces ese elemento se agrega al nuevo array y se pasa al sigueinte elemento dentro del array autos
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
  //console.log(resultado);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }

}

function noResultado() {
  limpiarHTML();

  const noResultado = document.createElement('div');
  noResultado.classList.add('alerta', 'error');
  noResultado.textContent = 'No hay resultados';

  resultado.appendChild(noResultado);
}

// Por defecto se pasa el valor del elemento que se esta filtrando
function filtrarMarca(auto) {
  const { marca } = datosBusqueda;

  // Si hay una marca que se quiere filtrar se entra
  if (marca) {
    return marca === auto.marca; // Si la marca del select es la misma del objeto que se este iterando, se regresa un true y por lo tanto ese elemento se agrega al nuevo array
  }

  // Si no hay ninguna marca que se busque filtrar entonces se retorna todo el auto completo, una vez se busque filtra por una marca se pasara siempre por el if
  return true;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;

  if (year) {
    return auto.year === year;
  }

  return true;
}

function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;

  if (minimo) {
    return auto.precio >= minimo;
  }

  return true;
}

function filtrarMaximo(auto) {
  const { maximo } = datosBusqueda;

  if (maximo) {
    return auto.precio <= maximo;
  }

  return true;
}

function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;

  if (puertas) {
    return auto.puertas === puertas;
  }

  return true;
}

function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;

  if (transmision) {
    return auto.transmision === transmision;
  }

  return true;
}

function filtrarColor(auto) {
  const { color } = datosBusqueda;

  if (color) {
    return auto.color === color;
  }

  return true;
}
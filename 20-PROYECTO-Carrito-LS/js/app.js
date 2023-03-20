// Casi siempre que selecciones un elemento del HTML de esta forma vas a usar const, ya que no se debe modificar porque siempre selecciona los mismos o el mismo elemento
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); // Tabla en la que se colocaran los cursos agrgados
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); // Boton de vaciar el carrito
const listaCursos = document.querySelector('#lista-cursos'); // Lista de todos los cursos de la pagina
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
  listaCursos.addEventListener('click', agregarCurso);

  document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carritoHTML();
  });

  carrito.addEventListener('click', eliminarCurso);

  vaciarCarritoBtn.addEventListener('click', () => {
    articulosCarrito = [];
    limpiarHTML();
    sincronizarStorage();
  })
}

function agregarCurso(e) {
  e.preventDefault(); // Agregar porque generalmente se abrira una pantalla a la hora de agregar un producto

  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement; // Obtenemos el elemento que guarda todo sobre el curso
    leerDatosCurso(cursoSeleccionado);
  } else {
    console.log('Eso no es un boton');
  }
}

function eliminarCurso(e) {
  if (e.target.classList.contains('borrar-curso')) {
    const cursoId = e.target.getAttribute('data-id');
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

    //console.log(articulosCarrito);
    carritoHTML(); // Manda a llamar a la funcion que se encarga de mostrar el carrito en el HTML ahora con la informacion actualizada
  }
}

function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }

  // Saber si un curso que agregas ya existe en el array para no volverlo a agregar y solo sumarle la cantidad
  const existe = articulosCarrito.some(curso => curso.id === infoCurso.id) // Some devuelve true o false dependiendo de si uno de los valores cumple la condicion
  if (existe) {

    const cursos = articulosCarrito.map(curso => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });

    articulosCarrito = [...cursos]; // cursos es igual a devolver el mismo array pero ya con la cantidad sumada al agrgar un curso que ya estaba
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso] // Como articulosCarrito guarda los valores de todos los cursos que se agreguen, no importa que limpiemos contenedorCarrito porque aun asi se volvera a llenar con los datos que estan guardados en articulosCarritos
  }


  console.log(articulosCarrito);

  carritoHTML();
}

// Funcion para crear el HTML con la informacion del carrito
function carritoHTML() {
  limpiarHTML();

  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach(curso => {
    const { imagen, titulo, precio, cantidad, id } = curso; // Nos ayuda a no tener que escribir por ejemplo 'curso.imagen' ya que este mismo valor ahora se guarda en una variable llamada 'imagen'
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
          <img src=${imagen} width="90">
        </td>
        <td>
          ${titulo}
        </td>
        <td>
          ${precio}
        </td>
        <td>
          ${cantidad}
        </td>
        <td>
          <a href='#' class='borrar-curso' data-id='${id}' >X</a>
        </td>
      `

    contenedorCarrito.appendChild(row);
  });

  sincronizarStorage();
}

function sincronizarStorage() {
  localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function limpiarHTML() {
  // Forma lenta
  //contenedorCarrito.innerHTML = '';

  // Mientras haya un elemento hijo dentro de contendorCarrito, este se elimina y se repite el while hasta que queda null y no tenga elementos hijos
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
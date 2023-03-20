const nuevoEnlace = document.createElement('a'); // Creas un elemento de etiqueta a (link)

nuevoEnlace.textContent = 'Sobre Nosotros';
nuevoEnlace.href = '/nuevo-enlace';
nuevoEnlace.target = '_blank';
nuevoEnlace.setAttribute('data-enlace', 'nuevo-enlace'); // Creamos un nuevo atributo para el elemento junto con su valor, si el atributo ya existe se actualiza el valor
nuevoEnlace.classList.add('clase-1');
nuevoEnlace.onclick = funcion1;

console.log(nuevoEnlace);

const navegacion = document.querySelector('.navegacion');
//console.log(navegacion.children)

//navegacion.appendChild(nuevoEnlace); // Agregar un hijo al elemento navegacion, lo agrega al final
navegacion.insertBefore(nuevoEnlace, navegacion.children[1]); // Inserta el elemento nuevoEnlace como hijo del elemento navegacion en la posicion anterior al hijo numero 1 (El segundo)

function funcion1() {
  alert('Siuuu');
}

// appendChild() == Agregar un elemento hijo

// Crear carta de informacion

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Twenty One Pilots';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$1000';
parrafo3.classList.add('precio');

const imagenInfo = document.createElement('img');
imagenInfo.src = 'img/hacer2.jpg';
imagenInfo.alt = 'TOP';

const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1); // Al usar appendChild se necesita introducir algo en formato de HTML
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagenInfo);
card.appendChild(info);

const infoContenedor = document.querySelector('.hacer .contenedor-cards'); // Selecciona el elemento con la clase de 'contenedor-cards' que este dentro de un elemento con la clase 'hacer'
infoContenedor.appendChild(card);
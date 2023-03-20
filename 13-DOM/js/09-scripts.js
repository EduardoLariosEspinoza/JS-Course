// Eliminar elemento HTML
const primerLink = document.querySelector('a');
primerLink.remove();

// Eliminar elemento HTML con la informacion del nodo padre
const padreEl = document.querySelector('.navegacion');
console.log(padreEl.children);
padreEl.removeChild(padreEl.children[2]);
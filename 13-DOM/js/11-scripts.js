const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', subirBajarFooter);

function subirBajarFooter() {

  // Si el elemento footer contiene la clase activo...
  if (footer.classList.contains('activo')) {
    footer.classList.remove('activo'); // La clase activo da propiedades diferentes en el CSS

    // this es lo mismo que btn-flotante porque es el que se manda con el evento
    this.classList.remove('activo');
    this.textContent = 'Idioma y moneda';

  } else {
    footer.classList.add('activo');
    this.classList.add('activo');
    this.textContent = 'X Cerrar';
  }
};
// Event Bubbling == Propagacion adicional no deseada de un evento

const card = document.querySelector('.card');
const info = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// Sin e.stopPropagation se desarrollan todos los eventos aunque solo queramos uno, esto ya que si haces click en el titulo tambien haces click en info ya que titulo esta dentro de el, ademas ambos se encuentran dentro de card

card.addEventListener('click', e => {
  e.stopPropagation();
  console.log('card');
});

info.addEventListener('click', e => {
  e.stopPropagation();
  console.log('info');
});

titulo.addEventListener('click', e => {
  e.stopPropagation();
  console.log('titulo');
});
// Solucionar Event Bubbling con Delegation

const card = document.querySelector('.card');

card.addEventListener('click', event => {
  console.log(event.target.classList);

  if (event.target.classList == 'card') {
    console.log('click en card');
  } else if (event.target.classList == 'precio') {
    console.log('click en precio');
  } else if (event.target.classList == 'info') {
    console.log('click en info');
  } else if (event.target.classList == 'titulo') {
    console.log('click en titulo');
  }
});
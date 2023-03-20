// Te regresa una lista de nodos

// La unica diferencia con querySelector es que ahora te regresa todos los elementos que encuentre, no solo uno
const card = document.querySelectorAll('.card');
console.log(card);

// Si hay dos elementos con el mismo id si te regresa ambos tambien

// Te regresa un NodeList vacio
const noExiste = document.querySelectorAll('.noExiste');
console.log(noExiste);
localStorage.removeItem('edad');

// Actualizar los datos con nueva informacion
const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('marzo');
localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear(); // Limpia todo el local storage
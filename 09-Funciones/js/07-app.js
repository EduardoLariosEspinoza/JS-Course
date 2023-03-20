iniciarApp();

function iniciarApp() {
  console.log('Iniciando...');
  //Se inicia la aplicacion
  prinicpal();
}

function prinicpal() {
  console.log('Aplicacion iniciada');
  autenticar('Deft');
}

function autenticar(usuario = 'Usuario') {
  console.log('Autenticando');
  //Proceso de autenticar
  console.log(`Usuario autenticado: ${usuario}`);
}
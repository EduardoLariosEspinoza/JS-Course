function saludar(nombre = 'usuario', apellido = '') {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Pedro', 'Rodriguez'); // Hola Pedro Rodriguez
saludar('Pedro'); // Hola Pedro
saludar('Rodriguez'); // Hola Rodriguez
saludar(); // Hola usuario
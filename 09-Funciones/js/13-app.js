let playlists = [];
let verificarDuplicado = 0;
let verificarExistencia = 0;

const reproductor = {
  cancion: '', // Propiedad

  // 'Metodo de propiedad' cuando tiene una funcion
  reproducir: idCancion => console.log(`Reproduciendo cancion numero ${idCancion}`),

  pausar: () => console.log(`Pausando cancion`),

  agregarPlaylist: nombrePlaylist => {

    for (let i = 0; i < playlists.length; i++) {
      if (nombrePlaylist == playlists[i]) {
        verificarDuplicado = 1;
      }
    }

    if (verificarDuplicado == 1) {
      console.log(`Ya existe una playlist con ese nombre`);
    } else {
      console.log(`Playlist '${nombrePlaylist}' agregada`);
      playlists.push(nombrePlaylist);
    }
  },

  elegirPlaylist: nombrePlaylist => {
    for (let i = 0; i < playlists.length; i++) {
      if (nombrePlaylist == playlists[i]) {
        console.log(`Reproduciendo la playlist '${nombrePlaylist}'`);
        verificarExistencia = 1;
      }
    }

    if (verificarExistencia == 0) {
      console.log(`No existe una playlist llamada '${nombrePlaylist}'`);
    }

    verificarExistencia = 0;
  },

  set nuevaCancion(cancion) {
    // Se usa this para especificar que busque en la estructura en la que esta ahora y no salga de ella
    this.cancion = cancion;
    console.log(`Agregando ${cancion}`);
  },

  get obtenerCancion() {
    console.log(`${this.cancion}`);
  }
}

// Como estos son declarados con get y set, no es necesario colocar los parentesis;
reproductor.nuevaCancion = 'Cancion1';
reproductor.obtenerCancion;

reproductor.reproducir(30); // Reproduciendo cancion numero 30

reproductor.borrar = idCancion => console.log(`Borrando cancion numero ${idCancion}`); // Solo creo la funcion y la agrego, no la mando a llamar todavia

reproductor.pausar(); // Pausando cancion
reproductor.borrar(3); // Borrando cancion numero 3

reproductor.agregarPlaylist("Para dormir"); // Playlist 'Para dormir' agregada
reproductor.elegirPlaylist("Para dormir"); // Reproduciendo la playlist 'Para dormir'
reproductor.elegirPlaylist("Para correrk"); // No existe una playlist llamada 'Para correrk'
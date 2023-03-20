let playlists = [];
let verificarDuplicado = 0;
let verificarExistencia = 0;

const reproductor = {
  volumen: 6, // Propiedad

  reproducir: function(idCancion) { // 'Metodo de propiedad' cuando tiene una funcion
    console.log(`Reproduciendo cancion numero ${idCancion}`);
  },

  pausar: function() {
    console.log(`Pausando cancion`);
  },

  agregarPlaylist: function(nombrePlaylist) {

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

  elegirPlaylist: function(nombrePlaylist) {
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
  }
}

reproductor.reproducir(30);

reproductor.borrar = function(idCancion) {
  console.log(`Borrando cancion numero ${idCancion}`);
}

reproductor.pausar();
reproductor.borrar(3);

reproductor.agregarPlaylist("Para barrer");
reproductor.elegirPlaylist("Para barrer");
reproductor.elegirPlaylist("Para dormir");
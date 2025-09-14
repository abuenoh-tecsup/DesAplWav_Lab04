// controllers/songController.js

// "Base de datos" en memoria para canciones
let songs = [];

const list = (req, res) => {
  // Renderiza la vista con las canciones cargadas
  res.render("songs", { songs });
};

const add = (req, res) => {
  const { titulo, autor, genero, album, anio } = req.body;

  // Validación básica
  if (!titulo || !autor || !genero || !album || !anio) {
    return res.render("songs", {
      songs,
      error: "Todos los campos son obligatorios"
    });
  }

  // Crear nueva canción
  const newSong = {
    id: songs.length + 1,
    titulo,
    autor,
    genero,
    album,
    anio
  };

  songs.push(newSong);

  // Redirige al listado después de guardar
  res.redirect("/songs");
};

const songController = {
  list,
  add
};

module.exports = songController;

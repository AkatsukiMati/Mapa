const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// CORS para permitir acceso desde Ionic
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Ruta de ejemplo que devuelve coordenadas
app.get('/api/mapas', (req, res) => {
  const data = {
    coordenadas: [
      { lat: 40.73061, lng: -73.935242, ciudad: 'Nueva York' },
      { lat: 48.8566, lng: 2.3522, ciudad: 'París' },
    ],
  };
  res.json(data);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


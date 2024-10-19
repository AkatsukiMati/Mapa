const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para permitir peticiones desde Ionic
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

// Ruta que devuelve marcadores para el mapa
app.get('/api/mapa', (req, res) => {
  const data = {
    marcadores: [
      { lat: 40.73061, lng: -73.935242, ciudad: 'Nueva York' },
      { lat: 48.8566, lng: 2.3522, ciudad: 'París' }
    ]
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`API de mapas corriendo en http://localhost:${PORT}`);
});

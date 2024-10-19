const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permitir todas las conexiones
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

app.get('/api/mapa', (req, res) => {
  res.json({
    marcadores: [
      { lat: 40.73061, lng: -73.935242, ciudad: 'Nueva York' },
      { lat: 48.8566, lng: 2.3522, ciudad: 'París' },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

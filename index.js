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
      { lat: -33.42690904033368, lng: -70.64815799700825, hospital: 'Clinica Davila' },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


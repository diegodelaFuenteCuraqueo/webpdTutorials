const express = require('express');
const app = express();

// Especifica la carpeta de archivos estáticos
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});


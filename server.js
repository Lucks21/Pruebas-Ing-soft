const express = require('express');
const fs = require('fs'); // Módulo 'fs' para trabajar con archivos del sistema
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

app.get('/prueba.js', (req, res) => {
    fs.readFile('prueba.js', (err, data) => {
        if (err) {
            res.status(500).send('Error leyendo el archivo de prueba');
        } else {
            res.type('text/javascript').send(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

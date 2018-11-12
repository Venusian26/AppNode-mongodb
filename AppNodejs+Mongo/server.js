// Importar los módulos
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var rutas = require('./rutas/endpoints')
// 2.- Crear una referencia a express
var app = express();

// 3.- Configurar la App con bodyParser
// Nos permite "revisar" los datos de (ejemplo POST)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 4.- Definir el puerto de escucha de la aplicación a 3000
var port = 3000;
// 5.- Conectarse a la base de datos
mongoose.connect('mongodb://172.17.0.2/pymes', { useNewUrlParser: true });
// 6.- Rutas con el prefijo api
app.use('/api', rutas);
// 7.- Inicializar el server express con el puerto de escucha
app.listen(port);
// 8.- Imprimir mensaje de bienvenida
console.log('Server en escucha en puerto:' + port);
// importar mongoose
var mongoose = require('mongoose');
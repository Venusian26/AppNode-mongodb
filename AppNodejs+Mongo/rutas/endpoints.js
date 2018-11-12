// 1.- Importar los módulos
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Asesor = require('../Esquema/Asesor')
// 2.- Crear una referencia al objeto express.Router
var router = express.Router();
// 3.- Crear una referencia a express
var app = express();
// 4.- Configurar la App con bodyParser
// Nos permite "revisar" los datos de (ejemplo POST)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 5.- MIDDLEWARE - ejemplo
router.use(function(req, res, next) {
console.log('-->Middleware');
next();
});
// 6.- Todas las Rutas con el prefijo api
//app.use('/api', router);

// 7.- Ruta a raiz
router.get('/', function(req, res) {
res.json({ message: 'Bienvenido a la API' });
});


//DEFINICION DE RUTAS EMPRESA

 /////EMPRESASS::::::::::::::::::::::::::::
//ruta para visualizar las empresas registradas
router.get('/empresa', function(req, res) {
    res.json({ message: 'Bienvenido al modulo de la empresa' });
    });

//Ruta para registrar una nueva empresa  {DEBE SER METODO POST}
router.post('/empresa/new', function(req, res) {
        res.json({ message: 'Registrar una nueva empresa' });
        });

//Ruta para visualizar la empresa y sus asesores asignados
router.get('/empresa/detalle', function(req, res) {
            res.json({ message: 'Empresas y sus asesores' });
            });
//ruta para asociar una nueva empresa a un asesor   {DEBE SER METODO POST}
router.post('/empresa/asociar', function(req, res) {
                res.json({ message: 'Empresas y sus asesores' });
                });
                
//::::::::ASESORES::::::::::::::
router.get('/Asesores', function(req, res) {
    res.json({ message: 'Modulo de Asesores' });
    });

//registrar un nuevo asesor
router.route('/asesor/new')
.post(function(req, res) {
var asesor = new Asesor();
asesor.nombre = req.body.nombre;
asesor.apellido = req.body.apellido;
asesor.rfc = req.body.rfc;
asesor.cel = req.body.cel;
asesor.domicilio= req.body.domicilio;

asesor.save(function(err) {
if (err) { res.send(err); }
res.json({ message: " -->Saved " })
});
})
.get(function(req, res) {
    Asesor.find(function(err, asesor) {
    if (err) { res.send(err) }
    res.json(asesor);
    });
    });

//consultar un asesor por id
    router.route('/asesor/:asesor_id')
    .get(function(req, res) {
    Asesor.findById(req.params.asesor_id, function(err, asesor) {
    if (err) { res.send(err); }
    res.json(asesor);
    });
    });

//Domiciolio de un asesor
    router.route('/asesor/domicilio/:domicilio')
    .get(function(req, res) {
    Asesor.find({ domicilio: req.params.domicilio }, function(err,
    asesor) {
    if (err) { res.send(err); }
    res.json(asesor);
    });
    });

    // 9.- Exportar el objeto router
    module.exports = router;
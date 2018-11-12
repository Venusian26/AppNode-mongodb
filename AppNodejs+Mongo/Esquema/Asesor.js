// importar mongoose
var mongoose = require('mongoose');

// Crear una referencia a la Schema
var Schema = mongoose.Schema;
// Definir el esquema
var asesorEsquema = new Schema({
nombre: String,
apellido: String,
rfc: String, 
cel: String,
domicilio: String
});



//Hacer disponible la definición del modelo
module.exports = mongoose.model('Asesor', asesorEsquema);

/*
CREA UN ASESOR DE PRUEBA
const Asesor = mongoose.model('Asesor', asesorEsquema);

async function createAsesorPrueba() {
    const asesor = new Asesor({
    nombre: "Juan Figueroa",
    apellido: "Figueroa",
    rfc: "HAJKJ1342121", 
    cel: "327193091",
    domicilio: "Tepic Nayarit"
    });

    const result = await asesor.save();
    console.log(result);
}
createAsesorPrueba();

*/



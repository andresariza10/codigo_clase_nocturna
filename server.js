const express = require('express')
const app = express()

//Definir puerto que me entrega la nube o uno que definamos

const port = process.env.PORT || 3000; //DETECTA EL PUERTO

//Implmentación del MIDDLEWARE para service public:
app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
  res.send('Hola, este es mi primer servidor desde ruta prueba 2')
})
 
app.listen(port, ()=>{
console.log(`Servidor corriendo en puerto: ${port}`);
}); 
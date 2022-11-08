import express from "express";

const PORT = process.env.PORT || 4000;  // Varlible de Entorno Puerto de la app
const app = express();


// Middleware
// req: Información que nos llega
// res: respuesta nuestra

app.get('/', (req, res) => {
  res.send('Hola Mundo ExpresJS te saluda G70 UCaldas MisionTic')
  console.log("Llego una peticion -- nodemon");
});

app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto # ${PORT}`)
});

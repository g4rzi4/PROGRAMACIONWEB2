//importar modulos de http que viene con nodejs para crear un servidor web
const http = require('http');
//definir el puerto en el que se va a ejecutar el servidor
const port = 3000;
//crear el servidor y definir la respuesta que se va a enviar al cliente
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
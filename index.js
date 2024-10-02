const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <style>
          body {
            background-color: black;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
            margin: 0;
            padding: 0 20px;
          }
          .text {
            display: flex;
            justify-content: center;
            flex: 1; /* Ocupar espacio disponible */
          }
          .image {
            display: flex;
            justify-content: center;
            flex: 1; /* Ocupar espacio disponible */
          }
          h1 {
            font-size: 48px;
            margin: 0; /* Eliminar margen para centrar mejor */
          }
          img {
            max-width: 300px; /* Ajusta el tamaño según sea necesario */
          }
        </style>
      </head>
      <body>
        <div class="text">
          <h1>Hola Mundo</h1>
        </div>
        <div class="image">
          <img src="https://www.shutterstock.com/image-vector/vector-illustration-holding-earth-icon-260nw-2069690258.jpg">
        </div>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

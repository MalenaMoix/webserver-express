//Vamos a usar el HTTP para montar un webserver
const http = require("http");

//Para poder escuchar instrucciones http primero tenemos que crear el servidor
http
    .createServer((request, response) => {
        //response.write('Hola Mundo');
        //Si ejecutamos aca, no le estamos diciendo que terminamos de crear la respuesta
        //Para eso lo siguiente
        //response.end();

        //O tmb podriamos regresar un json y que sea un servicio
        response.writeHead(200, { "Content-Type": "application/json" });

        let salida = {
            nombre: "Malena",
            edad: 22,
            url: request.url,
        };

        response.write(JSON.stringify(salida));
        response.end();
    })
    .listen(8080);

console.log("Escuchando el puerto 8080");

//En este ejemplo estamos escuchando son las peticiones y no importa de que URL sean
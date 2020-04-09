const express = require("express");
//La siguiente variable ya nos permite usar express como deseamos
const app = express();

app.get("/", function(req, res) {
    //res.send("Hello World!!!!!");

    let salida = {
        nombre: "Malena",
        edad: 22,
        url: req.url,
    };

    res.send(salida);
});

app.listen(8080, () => {
    console.log("Escuchando peticiones en el puerto 3000");
    //Esto se va a imprimir cuando el app.listen se levante
});

//Cuando trabajamos en express, y en este ejemplo en particular, solo estamos trabajando con un '/'
//Es decir, si en el ejemplo sin express yo ponia '/' o '/data' lo escuchaba, en este caso, si queremos '/data' lo tenemos que definir como esta hecho con el '/'
/*
app.get('/data', (req,res) => {
    res.send('Hola Data');
})
*/
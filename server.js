const express = require("express");
const app = express();
const hbs = require("hbs");
//Helpers
require("./hbs/helpers");

app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/parciales");
//Importamos HBS para que Express lo use como default engine para renderizar las paginas
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    //Para saber que en el home.hbs tengo 2 variables aqui lo indico de la siguiente manera. Esto me permite que sea dinamico
    res.render("home", {
        nombre: "malena",
        apellido: "moix",
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

/*app.listen(8080, () => {
    console.log("Escuchando peticiones en el puerto 8080");
    //Esto se va a imprimir cuando el app.listen se levante
});*/

//Como voy a subirlo a Heroku, voy a desconocer el puerto
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
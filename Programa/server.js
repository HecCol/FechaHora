const express = require("express");
const ruta=require("./rutas");
require("dotenv").config();


const app=express();
app.use("/",ruta);
const port=process.env.PORT || 3000
app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port);
});
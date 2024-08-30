const ruta=require("express").Router();
const HorayFecha=require("./middleware");
const MensajeHome=require("./middleware2");

ruta.get("/",HorayFecha,(req,res)=>{
    res.send(`Bienvenido, estas en Raiz`);
});

ruta.get("/home",MensajeHome,(req,res)=>{
    res.send("Bienvenido, estas en Home");
});

module.exports=ruta;
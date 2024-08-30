
//middleware
var HorayFecha=(req,res,next)=>{
    const FechaHora = new Date();
    const Actual = FechaHora.toLocaleString();
    console.log(`Hooola, hoy estamos a: ${Actual}`);
    next();
}

module.exports= HorayFecha=HorayFecha;


//middleware
var MensajeHome=(req,res,next)=>{
    console.log(`Bienvenido usuario`);
    next();
}

module.exports=MensajeHome=MensajeHome;
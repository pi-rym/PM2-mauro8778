const {Router}= require("express");

const router= Router();

router.get('/',(req,res)=>{

    res.status(200).send("bienvenido a nuestra app en el server")
})
module.exports=router;
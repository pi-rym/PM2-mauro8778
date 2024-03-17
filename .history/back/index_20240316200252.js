const app = require("./src/server");
const condb=require("./src/config/condb")

app.listen(3000, () => {

    console.log("servidor escuchando en puerto 3001");

}); //indicamos puerto para atender las solicitudes


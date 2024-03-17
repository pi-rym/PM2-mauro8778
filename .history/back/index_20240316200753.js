const app = require("./src/server");
const conDb =require("./src/config/condb")


conDb().then((res) => {
    app.listen(3000, () => {

        console.log("servidor escuchando en puerto 3000");
    
    }); 


});








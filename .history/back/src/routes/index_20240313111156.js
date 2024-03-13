const {Router}=require("express");

const{usersController}=require("../controllers/index")
const router= Router();

router.get("/users",usersController);
router.get("/product",productController);

module.exports= router
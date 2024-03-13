const {Router}=require("express");

const{usersController}=require("../controllers")
const{productController}= require("../controllers")
const router = Router();

router.get("/users",usersController);
router.get("/product",productController);

module.exports= router
const {Router}=require("express");

const{usersController}=require("../controllers")
const{moviesController}= require("../controllers")
const router = Router();

router.get("/users",usersController);
router.get("/movies",moviesController);

module.exports= router
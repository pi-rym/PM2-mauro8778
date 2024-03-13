const {Router}=require("express");

const{moviesController}= require("../controllers/movies")

const router = Router();

router.get("/users",usersController);
router.get("/movies",moviesController);

module.exports= router
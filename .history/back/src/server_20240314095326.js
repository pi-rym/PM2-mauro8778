const express = require("express");

const router = require ("./routes/");
const morgan= require("morgan");
const cors = require("cors");
const { log } = require("console");

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use((req ,res ,next ) => {

   console.log("este es mi middlewares");
}
);


app.use(router);


module.exports= app;
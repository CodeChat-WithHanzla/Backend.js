import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
  path: "./env",
});

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Listening at port : ${process.env.PORT}`);
    });
    app.on("error",(error)=>{
    console.log("Error :: ",error);
    
    })
  })
  .catch(() => {});

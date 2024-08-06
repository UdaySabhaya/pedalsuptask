import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { prisma } from "./model/db";
import router from "./routes";
dotenv.config({path:".env"});


const app = express();

prisma.$connect().then(() => {
    console.log("database connected");
    
}).catch((err:any) => {
    console.log("error while connceting database",err);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",router)

app.listen(5000,()=>{
    console.log("server is running on 5000");
})
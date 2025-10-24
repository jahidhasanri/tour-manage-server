import {Server} from "http";
import express from "express"
import mongoose from "mongoose";
let server: Server;
const app = express();
const startServer = async()=>{
try {
    await mongoose.connect("mongodb://localhost:27017/tour")
console.log("connected to database");
server = app.listen(5000,()=>{
    console.log('server is running to port 5000');
})
} catch (error) {
    console.log(error);
}
}
startServer();
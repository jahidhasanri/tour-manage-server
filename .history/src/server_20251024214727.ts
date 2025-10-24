import app from "./app";
import mongoose from "mongoose";
import {Server} from "http";
let server: Server;

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
process.on("unhandledRejection",()=>{
    console.log("unhandle rejection detected ... server shutting down..");
    if(server){
        server.close();
        process.exit(1);
    }
})

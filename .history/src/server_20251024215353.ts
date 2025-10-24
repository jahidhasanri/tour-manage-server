import app from "./app";
import mongoose from "mongoose";
import {Server} from "http";
import { promise } from "zod";
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
// error handeling

// unhandel
process.on("unhandledRejection",(err)=>{
    console.log("unhandle rejection detected ... server shutting down..",err);
    if(server){
        server.close(()=>{
            process.exit(1);
        });
    }
    process.exit(1);
})

// uncaught
process.on("uncaughtException",(err)=>{
    console.log("uncaught rejection detected ... server shutting down..",err);
    if(server){
        server.close(()=>{
            process.exit(1);
        });
    }
    process.exit(1);
})

// promise.reject(new Error('hello'))
throw new Error("hello"
)
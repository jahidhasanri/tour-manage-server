import app from "./app";
import mongoose from "mongoose";
import {Server} from "http";
import { envVars } from "./app/config/env";


let server: Server;

const startServer = async()=>{
try {
  
    await mongoose.connect(envVars.DB_URL)
console.log("connected to database");
server = app.listen(envVars.PORT,()=>{
    console.log(`server is running to port ${envVars.PORT}`);
})
} catch (error) {
    console.log(error);
}
}
startServer();
// error handeling

process.on("SIGTERM",()=>{
    console.log("SIGTERM signal recieved detected ... server shutting down..");
    if(server){
        server.close(()=>{
            process.exit(1);
        });
    }
    process.exit(1);
})

process.on("SIGINT",()=>{
    console.log("SIGINT signal recieved detected ... server shutting down..");
    if(server){
        server.close(()=>{
            process.exit(1);
        });
    }
    process.exit(1);
})

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
// throw new Error("hello")
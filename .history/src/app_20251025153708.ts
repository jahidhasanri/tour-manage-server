
import express, { Request, Response } from "express"
import { UserRoutes } from "./app/modules/user/user.router";
app.use('/api/vi/user',UserRoutes)
const app = express();
app.get ("/",(req:Request,res:Response)=>{
    res.status(200).json({
        message:"welcome to tour management system backend"
    })
})

export default app;
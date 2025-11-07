/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import { router } from "./app/modules/routes";
import { success } from "zod";
const app = express();
app.use(express.json())
app.use(cors())

app.use('/api/v1',router)
app.get ("/",(req:Request,res:Response)=>{
    res.status(200).json({
        message:"welcome to tour management system backend"
    })
})

//global error handeling


export default app;
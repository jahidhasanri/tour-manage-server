/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"

export const globalErrorHangler =(err: any, req:Request,res:Response, next:NextFunction)=>{
    res.status(500).json({
        success:false,
        message:`something went wrong ${err.message}`,
        err,
        stack: err.stack
    })
}
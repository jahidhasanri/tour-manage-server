/* eslint-disable no-console */
import { NextFunction, Request, Response } from "express";

import { UserServices } from "./user.service";

const CreateUser =async(req:Request,res:Response, next:NextFunction)=>{
    try {
      const user= await UserServices.creatUser(req.body)
       
        res.status(201).json({
            message:"user created successfully",
            user
        })
    } catch (error) {
        console.log(error);
       next(error)
    }
}
export const userConterolers ={
    CreateUser
}
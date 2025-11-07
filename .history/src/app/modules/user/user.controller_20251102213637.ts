/* eslint-disable no-console */
import { Request, Response } from "express";

import { UserServices } from "./user.service";

const CreateUser =async(req:Request,res:Response)=>{
    try {
      const user= await UserServices.creatUser(req.body)
       
        res.status(201).json({
            message:"user created successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:'user not created! something is wrong',error
        })
    }
}
export const userConterolers ={
    CreateUser
}
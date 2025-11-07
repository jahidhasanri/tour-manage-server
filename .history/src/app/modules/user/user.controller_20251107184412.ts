/* eslint-disable no-console */
import { NextFunction, Request, Response } from "express";

import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";



// const CreateUser =async(req:Request,res:Response, next:NextFunction)=>{
//     try {
//       const user= await UserServices.creatUser(req.body)
       
//         res.status(201).json({
//             message:"user created successfully",
//             user
//         })
//     } catch (error) {
//         console.log(error);
//        next(error)
//     }
// }



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CreateUser =catchAsync(async(req:Request,res:Response, next:NextFunction)=>{
    const user= await UserServices.creatUser(req.body)
        res.status(201).json({
            message:"user created successfully",
            user
        })
})






const getAllUsers = async(req:Request,res:Response, next:NextFunction)=>{
    try {
        const users= await UserServices.getAllUsers();
        return users;
    } catch (err) {
        console.log(err);
        next(err) ;
    }
}

export const userConterolers ={
    CreateUser,
    getAllUsers
}
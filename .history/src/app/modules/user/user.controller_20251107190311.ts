/* eslint-disable no-console */
import { NextFunction, Request, Response } from "express";

import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";




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


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllUsers =catchAsync(async(req:Request,res:Response, next:NextFunction)=>{
 const users= await UserServices.getAllUsers();
//  res.status(201).json({
//             success:true,
//             message:"all users retrieved successfully",
//             data:users
//         })
sendResponse(res,{
    statusCode:200,
    message:"all users retrieved successfully",
    success:true,
    data:users,
    
})
}) 

export const userConterolers ={
    CreateUser,
    getAllUsers
}
import { Request, Response } from "express";
import { User } from "./user.model";

const CreateUser =async(req:Request,res:Response)=>{
    try {
        const {name,email}=req.body;
        const user = await User.create({
            name,email,
        })
        res.status(201)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:'user not created! something is wrong',error
        })
    }
}
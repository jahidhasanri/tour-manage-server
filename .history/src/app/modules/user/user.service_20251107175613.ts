import { Iuser } from "./user.interface";
import { User } from "./user.model";
const creatUser = async(payload: Partial<Iuser>)=>{
   const {name,email}=payload
    const user = await User.create({
        name,email
    })
    return user
}

const getAllUsers = async()=>{
    const users = await User.find({});
    return users;
}

export const UserServices ={
creatUser,
getAllUsers
}
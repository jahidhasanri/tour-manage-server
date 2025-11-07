import { Iuser } from "./user.interface";

const creatUserService = async(payload: Partial<Iuser>)=>{
   const {name,email}=payload
    const user = await User.create({
        name,email
    })
    return user
}
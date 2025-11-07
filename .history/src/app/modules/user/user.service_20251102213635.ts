import { Iuser } from "./user.interface";
import { User } from "./user.model";
const creatUser = async(payload: Partial<Iuser>)=>{
   const {name,email}=payload
    const user = await User.create({
        name,email
    })
    return user
}
export const UserServices ={
creatUser
}
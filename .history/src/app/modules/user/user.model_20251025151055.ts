import { Schema } from "mongoose";
import { Iuser } from "./user.interface";

const UserSchema = new Schema<Iuser>({
{
    timestamps:true,
    versionKey:false
}
})
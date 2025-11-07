import { Schema } from "mongoose";
import { IauthProvider, IsActive, Iuser, Role } from "./user.interface";
import { required } from "zod/v4/core/util.cjs";

const authProvidersSchema = new Schema<IauthProvider>({
   provider:{type:String,required:true},
   providerId:{type:String,required:true}
},{
    versionKey:false,
    _id:false
})

const UserSchema = new Schema<Iuser>({
    name:{type:String,required:true},
    email: {type:String,required:true,unique:true},
    password:{type:String},
    role:{
        type:String,
        enum:Object.values(Role),
        default:Role.USER
    },
    phone:{type:String},
    picture:{type:String},
    address:{type:String},
    isDeleted:{type:Boolean,default:false},
    isActive:{
        type:String,
        enum:Object.values(IsActive),
        default:IsActive.ACTIVE
    },
    isVerified:{type:Boolean,default:false},
    auths:[authProvidersSchema],
},
{
    timestamps:true,
    versionKey:false
})
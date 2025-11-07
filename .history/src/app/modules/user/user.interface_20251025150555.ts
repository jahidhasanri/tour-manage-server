export enum Role{
    SUPER_ADMIN = "SUPER_ADMIN",
    USER="USER",
    GUIDE ="GUIDE"
}

export interface IauthProvider{
    provider:string;
    providerId:string
}

export interface Iuser{
    name:string;
    email:string;
    password?:string;
    phone?:string;
    picture?:string;
    address?:string;
    isDeleted?:string;
    isActive?:string;
    isVerified?:string;
    role:Role
    auths:
   
}
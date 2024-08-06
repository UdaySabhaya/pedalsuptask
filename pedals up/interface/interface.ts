import { Request } from 'express';
export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
    userType?: string;
}

export interface RentalRequest {
    id?: number;
    name: string;
    email: string;
    contactNumber: string;
    address: string;
    sex: string;
    age: number;
    proofOfIdentification: string;
    uniqueCode: string;
    cycleTypeId:number
    status?:String | any

}

export interface CycleType {
    id?: number;
    name: string;
    rent: number
    period: string
}
export interface RequestExtends extends Request {
    user?:any
}

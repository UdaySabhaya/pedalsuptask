import { NextFunction, Request, Response } from "express";
import { userService } from "../services/userService";
// import { Users } from "@prisma/client";
import jwt from "jsonwebtoken";
import { User } from "../interface/interface";
const secret = '${PROCESS.ENV.SECRET}';


const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        console.log(data);
        
        const signupUser = await userService.signupUser(data);
        return res.send({ data: signupUser })
    } catch (error) {
        next(error);
    }
}
const login = async (req: any, res: Response, next: NextFunction) => {
    try {
        const data = req.body;

        const loggedUser = await userService.login(data);
        console.log(loggedUser);
        const signupToken = jwt.sign(loggedUser, secret, {
                expiresIn: '5h'
            })
        
        res.status(200).json({
            sucess: loggedUser,
            token: signupToken
        })
    } catch (error) {
        console.log(error);

    }
}
export const userController = {
    register, login
}
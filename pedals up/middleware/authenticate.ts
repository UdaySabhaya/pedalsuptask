import { NextFunction, Response } from "express";
import { RequestExtends } from "../interface/interface";
import jwt from "jsonwebtoken";

const secret = '${PROCESS.ENV.SECRET}';

export const isAuthenticate = (req: RequestExtends, res: Response, next: NextFunction) => {
        try {
                const token = req?.headers?.authorization?.split(' ')[1];
                if (!token) {
                        throw new Error("Unauthorized");
                }
                const verifyToken: any = jwt.verify(token,secret)
           
                if (!verifyToken) {
                        throw new Error('Invalid token');
                }
                req.user = verifyToken;
                next();
        } catch (error) {
                next(error);
        }
}
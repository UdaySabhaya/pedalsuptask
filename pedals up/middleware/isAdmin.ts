import { NextFunction, Response } from "express";

import { RequestExtends } from "../interface/interface";
import { prisma } from "../model/db";


export const isAdmin = async (req: RequestExtends, res: Response, next: NextFunction) => {
    try {
        const LoggerUser = req.user

        const admin = await prisma.users.findFirst({
            where: {
                id: LoggerUser.id
            }
        })

        if (!(admin?.userType === 'admin' )) {
            throw new Error("You Are Not Admin")
        }

        next();


    } catch (error) {

        next(error);
    }
}
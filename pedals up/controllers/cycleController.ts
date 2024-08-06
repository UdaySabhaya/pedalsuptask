import { NextFunction, Response, Request } from "express";
import { userService } from "../services/userService";
import { cycleService } from "../services/cycleService";


const addCycle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const cycledata = await cycleService.addCycle(data)
        res.send({
            success:cycledata
        })
    } catch (error: any) {
        throw new Error(error);

    }
}

const showCycle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const cycledata = await cycleService.showCycleDetails()
        res.send({
            success:cycledata
        })
    } catch (error: any) {
        throw new Error(error);

    }
}

export const cycleController = {
    addCycle, showCycle
}
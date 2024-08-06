import { CycleType } from "@prisma/client";
import { prisma } from "../model/db";
import bcrypt from "bcrypt"

const addCycle = async (data: CycleType) => {

    const typeExists = await prisma.cycleType.findFirst({
        where: {
            type: data.type
        }
    })

    if (typeExists) {
        throw new Error("type Already Exist");
    }

    const cycleData = await prisma.cycleType.create({
        data: {
            type: data.type,
            period: data.period,
            rent: data.rent
        }
    })

    return cycleData;
}
const showCycleDetails = async () => {
    const cycleData = await prisma.cycleType.findMany()

    return cycleData;
}



export const cycleService = {
    addCycle, showCycleDetails
}
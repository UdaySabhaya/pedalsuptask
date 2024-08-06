import { RentalRequest } from "../interface/interface";
import { prisma } from "../model/db";

const bookCycle = async (data: RentalRequest) => {
    
    const cycleData = await prisma.rentalRequest.create({
        data: {
            name: data.name,
            email: data.email,
            contactNumber: data.contactNumber,
            address: data.address,
            sex: data.sex,
            age: data.age,
            uniqueCode: data.uniqueCode,
            cycleTypeId: data.cycleTypeId,
            proofOfIdentification: data.proofOfIdentification,
        }
    })

    return cycleData;
}

const approval = async (data:RentalRequest) => {

    const result = await prisma.rentalRequest.update({
        where: {
            id: data.id
        },
        data: {
            status: data.status
        }
    });

return result;

}

export const requestService = {
    bookCycle, approval
}
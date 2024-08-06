import { NextFunction,Response ,Request} from "express";
import {v4 as uuid4} from 'uuid';
import { requestService } from "../services/requestService";
const rentalRequest = async(req: Request, res: Response, next: NextFunction) => {
    try {
        
        if (!req.file) {
            throw new Error("Image file is required");
        }
        const base64Image = req.file.buffer.toString('base64');
        const uniCode = uuid4();
        const data = {
            name: req.body.name,
            email:req.body.email,
            contactNumber:req.body.contactNumber,
            address:req.body.address,
            sex:req.body.sex,
            age:Number(req.body.age),
            uniqueCode:uniCode,
            cycleTypeId:Number(req.body.cycleTypeId),
            proofOfIdentification:base64Image
        };
        console.log(req.body.age);
        
        const create = await requestService.bookCycle(data);
        res.send({
            success:create,
            message:"ride booked"
        })
     

    } catch (error) {
        next(error)
    }

}


const updateRentalStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;

        const updated = await requestService.approval(data);
        res.send({
            success: updated,
            message: "Status updated successfully"
        });
    } catch (error) {
        next(error);
    }
};



export const requestController = {
    rentalRequest,updateRentalStatus
}
import express from "express";
import  { userController }  from "../controllers/userController";
import { cycleController } from "../controllers/cycleController";
import multer from 'multer';
import { requestController } from "../controllers/requestController";
import { isAuthenticate } from "../middleware/authenticate";
import { isAdmin } from "../middleware/isAdmin";
const router = express.Router();

router.post("/register",userController.register);
router.post("/login",userController.login);


router.post("/cycle",isAuthenticate,isAdmin,cycleController.addCycle);
router.get("/getcycle",isAuthenticate,cycleController.showCycle);


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/requestRent",isAuthenticate, upload.single('proofOfIdentification'), requestController.rentalRequest);
router.put("/requestRent", isAuthenticate,isAdmin,requestController.updateRentalStatus);





export default router;
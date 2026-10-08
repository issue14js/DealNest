import { Router } from "express";
import { createlead,getleads,getlead } from "../controller/leadController.js";
import authMiddilware from "../middilware/authMiddilware.js";
import roleMiddilware from "../middilware/roleMiddilware.js";


const router = Router()

router.get("/",authMiddilware,getleads);
router.get('/:id',authMiddilware,getlead)
router.post('/create',authMiddilware,roleMiddilware("admin","salesAgent") ,createlead)

export default router 
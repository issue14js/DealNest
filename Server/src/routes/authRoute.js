import { Router } from 'express'
import { userRegister,userLogin,userLogout,getMe } from '../controller/authController.js'
import authMiddilware from '../middilware/authMiddilware.js'

const router = Router()

router.post('/register',userRegister)
router.post('/login',userLogin)
router.post('/logout',userLogout)
router.get('/me',authMiddilware,getMe)
export default router
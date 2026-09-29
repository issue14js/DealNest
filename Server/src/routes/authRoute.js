import { Router } from 'express'
import { userRegister,userLogin,userLogout,getMe,updateUser,updateAvatar,updatePassword} from '../controller/authController.js'
import authMiddilware from '../middilware/authMiddilware.js'
import upload from '../middilware/upload.js'

const router = Router()

router.post('/register',userRegister)
router.post('/login',userLogin)
router.post('/logout',userLogout)
router.get('/me',authMiddilware,getMe)
router.put('/updateuser',authMiddilware,updateUser)
router.patch('/updateavatar',authMiddilware, upload.single("avatar"), updateAvatar)
router.patch('/updatepassword',authMiddilware,  updatePassword)
export default router
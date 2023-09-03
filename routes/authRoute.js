import express from 'express'
import { registerController, loginController, testController, forgotPasswordController } from '../controllers/authController.js'
import { checkIsAdmin, requireSignIn } from '../middleware/authMiddleware.js'

//router object
const router = express.Router()

// routing
// REGISTER || METHOD POST
router.post('/register', registerController)
// login || METHOD POST
router.post('/login', loginController)

//testing protected route 
router.get('/test', requireSignIn, checkIsAdmin, testController)

//changing password
router.post('/forgot-password', forgotPasswordController)

//check is admin
router.get('/admin-auth', requireSignIn, checkIsAdmin, (req, res) => {
    res.status(200).send({ ok: true })
})
//check if logged in
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})
export default router;

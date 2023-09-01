import express from 'express'
import { registerController, loginController, testController } from '../controllers/authController.js'
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

//protected Route auth

router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})
export default router;

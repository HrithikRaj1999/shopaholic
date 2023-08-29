import express from 'express'
import { registerController, loginController, testController } from '../controllers/authController.js'
import { requireSignIn } from '../middleware/authMiddleware.js'

//router object
const router = express.Router()

// routing
// REGISTER || METHOD POST
router.post('/register', registerController)
// login || METHOD POST
router.post('/login', loginController)

//testing protected route 
router.get('/test', requireSignIn, testController)

export default router;

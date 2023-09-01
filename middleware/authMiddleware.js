import JWT from "jsonwebtoken"
import userModel from "../models/userModel.js";


export const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        //By attaching the decoded user
        //information to the req object, you make that information available to
        //downstream middleware functions or route handlers.
        req.user = decode
        next();
    }
    catch (err) {
        console.log(err);
        res.send({ message: err })
    }
}

export const checkIsAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role === 'user') {
            return res.status(401).send({
                success: false,
                message: "unauthorized Access"

            })
        }
        next()

    }
    catch (err) {
        console.log(err);
        res.status(401).send({
            success: false,
            message: "Error",
            error: err
        })
    }
}
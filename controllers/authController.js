import { comparePassword, hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
import JWT from "jsonwebtoken"
export const registerController = async (req, res) => {
    try {
        const { name, email, password, address, phone, state, country, zip, securityAnswer } = req.body
        if (!(name && email && password && address && phone && state && country && zip && securityAnswer)) {

            return res.send({ error: "All Fields is Required" })
        }
        //existing user check
        const existingUser = await userModel.findOne({ email })
        if (existingUser)
            return res.status(400).send({ success: false, message: 'Already Registered Please log in' })
        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel({ name, email, address, phone, state, country, zip, securityAnswer, password: hashedPassword }).save()
        res.status(200).send({
            success: true,
            message: "User Register Successfully",
            user
        })
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error in Registration'
        })
    }
}

export const loginController = async (req, res) => {
    const { email, password, } = req.body
    console.log(email, password);
    try {
        const user = await userModel.findOne({ email });
        console.log(user);
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email not registered"
            })
        }
        const match = await comparePassword(password, user.password)
        console.log(match)
        if (!match) {
            return res.status(404).send({
                success: false,
                message: "Wrong password"
            })
        }

        //token
        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        return res.status(200).send({
            success: true,
            message: 'login successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token
        });

    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: 'LOGIN FAILED ',
            error
        })
    }

}
export const forgotPasswordController = async (req, res) => {
    try {
        const {
            email,
            confirmPassword,
            securityAnswer,
        } = req.body;
        if (!(email && confirmPassword && securityAnswer)) {
            return res.send({ error: "All Fields is Required" })
        }
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.send({
                success: false,
                message: 'User not Found'
            })
        }
        if (existingUser.securityAnswer !== securityAnswer) {
            return res.send({
                success: false,
                message: 'Kuch toh Galat hai'
            })
        }
        const hashedPassword = await hashPassword(confirmPassword)
        const updatedUser = await userModel.findByIdAndUpdate(existingUser._id, {
            ...existingUser, password: hashedPassword,
        })
        return res.send({
            success: true,
            message: "Password Updated successfully",
            updatedUser
        })
    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: 'Error in Password Changing'
        })
    }
}
export const testController = async (req, res) => {
    res.status(200).send({ message: "this is a protected Route user can only access when they have JWT token or signed in" })
}
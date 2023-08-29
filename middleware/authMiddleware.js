import JWT from "jsonwebtoken"

export const requireSignIn = async (req, res, next) => {
    try {
        console.log({ key: req.headers.authorization })
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        next();
    }
    catch (err) {
        console.log(err);
        res.send({ message: err })
    }
}
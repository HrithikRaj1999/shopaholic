import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"

//rest object
const app = express();
//middleware
app.use(express.json())
app.use(morgan('dev'))

//configure env
dotenv.config()

//database config
connectDB()


//routes 
app.use('/api/v1/auth', authRoutes)





//rest api
app.get("/", (req, res) => {
    res.send("<h1>welcome to ShopAholic</h1>")
})

//port

const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`server Running on ${PORT} with ${process.env.DEV_MODE}`)
})
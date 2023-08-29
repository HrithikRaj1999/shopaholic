import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connect to Mongodb database ${con.connection.host}`);
    }
    catch (error) {
        console.log(`Error in mongodb ${error}`);
    }
}
export default connectDB;
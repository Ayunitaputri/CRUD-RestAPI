import mongoose from "mongoose";

//async diatasi dengan try catch
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log (`Database connected succesfully : ${conn.connection.host}`)
    } catch (error){
        console.log(error.message)
    }
};



export default connectDB;
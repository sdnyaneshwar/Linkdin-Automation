import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const DB_NAME = "linkdin";
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: 
        ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MONGODB connection FAiled",error);
        process.exit(1)

    }
}

export default connectDB
/*
import mongoose from "mongoose"

const connectMongoDB = async () =>{

    try {
        const uri = process.env.MONGODB_URI as string;
        await mongoose.connect(uri);
        console.log("Connected To MongoDB");
    }
    catch(error){
        console.log("error message: " + error);
    }
}

export default connectMongoDB;

*/
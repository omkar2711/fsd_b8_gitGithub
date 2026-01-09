import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://omkarbharitkar79_db_user:fOOzsvIQpMDiTvV2@cluster0.gmz9qly.mongodb.net/?appName=Cluster0"


const dbConnection = async() => {
    try{
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default dbConnection;

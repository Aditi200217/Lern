// import dotenv from "dotenv"
// console.log(process.env) // If using ES modules
// dotenv.config()
import mongoose from "mongoose";

async function connectToDatabase() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            keepAlive: true,
        });
        console.log('🍃 MongoDB server connected');
    } catch (error) {
        console.log(error);
        console.log(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);

    }
}

export { connectToDatabase };
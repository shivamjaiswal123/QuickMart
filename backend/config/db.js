import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB is connected")
    } catch (error) {
        console.error("error when connecting to database.")
    }
}

export default connectDB
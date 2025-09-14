import mongoose from "mongoose";

const connectDB = async () => {
    console.log("hello");
  try {

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
    console.log("hello world");
  }
};

export default connectDB;

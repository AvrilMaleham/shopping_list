// Connect to database
import mongoose from "mongoose";

const connect = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
      throw new Error("MONGO_URL is not defined in the environment variables");
    }
    
    await mongoose.connect(mongoUrl);

    console.log("MongoDB connection successful");
  } catch (error) {
    throw new Error("Error connecting to MongoDB");
  }
};

export default connect;

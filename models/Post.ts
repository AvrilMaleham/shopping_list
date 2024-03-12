// Define the post schema 
import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// First, check if the schema already exists 
export default mongoose.models.Post || mongoose.model("Post", postSchema);

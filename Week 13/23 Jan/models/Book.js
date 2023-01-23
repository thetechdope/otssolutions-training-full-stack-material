import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  display: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("BookSchema", bookSchema);

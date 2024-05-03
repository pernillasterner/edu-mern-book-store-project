import mongoose from "mongoose";

// Defining schema for books. Timestamp will add createdAt and updatedAt
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Exporting the book model using mongoose.model
export const Book = mongoose.model("Book", { bookSchema });

const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    image: { type: String, default: "assets/placeholder.jpg" },
    content: { type: String, required: true }, // Storing as a single string
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

module.exports = mongoose.model("Article", articleSchema);

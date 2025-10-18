const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: true,
      maxlength: 200,
    },
    content: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      default: "",
    },
    tags: [String],
    category: {
      type: String,
      default: "General",
    },
    author: {
      type: String,
      default: "CareKwik Team",
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Blog", blogSchema);  
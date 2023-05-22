const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
        max: 500,
    },
    title: {
        type: String,
        required: true,
        max: 50,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: "",
    },
    video: {
        type: String,
        default: "",
    },
    likes: {
        type: Array,
        default: [],
    },
    comments: {
        type: Array,
        default: [],
    },
    rating: {
        type: Number,
        default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);

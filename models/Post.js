const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
        required: true,
    },
    instructions: {
        type: Array,
        required: true,
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
    thumbnail: {
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
    cookTime: {
        type: Number,
        default: 0,
    },
    servings: {
        type: Number,
        default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);

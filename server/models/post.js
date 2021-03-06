const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  imageUrl: {
    required: true,
    type: String,
  },
  text: {
    type: String,
  },
  likes: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Post", postSchema);

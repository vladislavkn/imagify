const mongoose = require("mongoose");
const Post = require("./models/post.js");

mongoose
  .connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((e) => console.log(e));

module.exports = {
  async getAllPosts({ limit = 999 }) {
    return await Post.find({}).limit(limit);
  },
  async getPostById({ id }) {
    return await Post.findById(id);
  },
  async addPost({ post }) {
    const newPost = await new Post({
      ...post,
      likes: 0,
    }).save();

    return newPost;
  },
  async addLike({ id }) {
    return await Post.findOneAndUpdate(
      { _id: id },
      { $inc: { likes: 1 } },
      { new: true }
    ).lean();
  },
  async removeLike({ id }) {
    return await Post.findOneAndUpdate(
      { _id: id },
      { $inc: { likes: -1 } },
      {
        new: true,
      }
    ).lean();
  },
};

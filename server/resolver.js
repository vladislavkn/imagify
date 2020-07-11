const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((e) => console.log(e));

const posts = [
  {
    id: "0",
    imageUrl: "https://picsum.photos/200/300",
    text: "test text",
    likes: 2,
  },
  {
    id: "1",
    imageUrl: "https://picsum.photos/400/400",
    text: "",
    likes: 1,
  },
];

module.exports = {
  getAllPosts(params) {
    return posts;
  },
  getPostById({ id }) {
    return posts.find((post) => post.id === id);
  },
  addPost({ post }) {
    const newPost = { ...post, id: posts.length.toString(), likes: 0 };
    posts.push(newPost);
    return newPost;
  },
  addLike({ id }) {
    const post = posts.find((post) => post.id === id);
    post.likes++;
    return post;
  },
  removeLike({ id }) {
    const post = posts.find((post) => post.id === id);
    if (post.likes > 0) post.likes--;
    return post;
  },
};

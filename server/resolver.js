const posts = [
  {
    id: "0",
    imageUrl: "https://picsum.photos/200/300",
    text: "test text",
  },
  {
    id: "1",
    imageUrl: "https://picsum.photos/400/400",
    text: "",
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
    const newPost = { ...post, id: posts.length.toString() };
    posts.push(newPost);
    return newPost;
  },
};

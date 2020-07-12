<template>
  <div class="home">
    <Post v-for="post in posts" :key="post.id" v-bind="post" />
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "Home",
  components: { Post },
  data() {
    return {
      posts: new Array(10).fill({}).map((_, i) => ({
        imageUrl: "",
        text: "Test text",
        id: `${i}`,
        likes: i,
      })),
    };
  },
};
</script>

<style>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

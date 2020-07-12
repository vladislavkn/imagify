<template>
  <div class="home">
    <Post v-for="post in posts" :key="post.id" v-bind="post" />
  </div>
</template>

<script>
import Post from "@/components/Post";
import gql from "graphql-tag";

export default {
  name: "Home",
  components: { Post },
  apollo: {
    posts: {
      query: gql`
        query GetAllPosts {
          getAllPosts(limit: 1) {
            imageUrl
            text
            likes
            _id
          }
        }
      `,
      update: (data) => data.getAllPosts,
      pollInterval: 60000,
    },
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

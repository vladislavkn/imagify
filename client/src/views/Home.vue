<template>
  <div class="home">
    <Post
      v-for="post in posts"
      :key="post.id"
      v-bind="post"
      @like="onLike"
      @dislike="onDislike"
    />
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
          getAllPosts(limit: 12) {
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
  methods: {
    onLike({ _id }) {
      this.$apollo.mutate({
        mutation: gql`
          mutation AddLike($id: ID!) {
            addLike(id: $id)
          }
        `,
        variables: {
          id: _id,
        },
      });
    },
    onDislike({ _id }) {
      this.$apollo.mutate({
        mutation: gql`
          mutation RemoveLike($id: ID!) {
            removeLike(id: $id)
          }
        `,
        variables: {
          id: _id,
        },
      });
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

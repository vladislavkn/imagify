<template>
  <div class="post">
    <img :src="imageSource" alt="Post image" />
    <div class="post__content"></div>
    <h4 class="post__text">
      {{ text }}
    </h4>
    <button class="post__likes">
      <img class="post__like-icon" src="../assets/like.svg" alt="like icon" />
      {{ likes }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSource() {
      return this.imageUrl.length
        ? require(`../assets/${this.imageUrl}`)
        : require("../assets/Photo.png");
    },
    // likeIconSource() {
    //   return this.isLiked
    //     ? require("../assets/like-filled.svg")
    //     : require("../assets/like.svg");
    // },
  },
  // methods: {
  //   like() {
  //     this.$emit(this.isLiked ? "like" : "dislike");
  //   },
  // },
};
</script>

<style>
.post {
  text-align: center;
  margin-right: 16px;
  margin-bottom: 16px;
}
.post__text {
  padding: 16px 0 8px 0;
}

.post__likes {
  background: none;
  border: none;
  outline: none;
  padding: 8px 0;
  font-size: 0.75rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.post__like-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
</style>

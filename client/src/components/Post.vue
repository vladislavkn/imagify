<template>
  <div class="post">
    <img :src="imageSource" alt="Post image" />
    <div class="post__content"></div>
    <h4 class="post__text">
      {{ text }}
    </h4>
    <button class="post__likes" @click="onPresslike()">
      <img class="post__like-icon" :src="likeIconSource" alt="like icon" />
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
    _id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      likeIconSource: "",
    };
  },
  computed: {
    imageSource() {
      let result;
      if (this.imageUrl.length) {
        try {
          result = require(`../assets/${this.imageUrl}`);
        } catch (e) {
          console.error("[Load image error]:", e);
          result = require("../assets/Photo.png");
        }
      } else {
        result = require("../assets/Photo.png");
      }
      return result;
    },
    isLiked: {
      cache: false,
      set(val) {
        const likes = JSON.parse(localStorage.getItem("likes") || "{}");
        likes[this._id] = val;
        localStorage.setItem("likes", JSON.stringify(likes));
      },
      get() {
        const likes = JSON.parse(localStorage.getItem("likes") || "{}");
        return likes[this._id];
      },
    },
  },
  methods: {
    onPresslike() {
      this.isLiked = !this.isLiked;
      this.setLikeIconSource();
      this.$emit(this.isLiked ? "like" : "dislike");
    },
    setLikeIconSource() {
      this.likeIconSource = this.isLiked
        ? require("../assets/like-filled.svg")
        : require("../assets/like.svg");
    },
  },
  mounted() {
    this.setLikeIconSource();
  },
};
</script>

<style>
.post {
  text-align: center;
  margin: 8px;
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

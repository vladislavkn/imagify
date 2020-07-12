<template>
  <div class="post">
    <div class="post__image-wrapper">
      <img :src="imageSource" alt="Post image" class="image" />
    </div>

    <div class="post__content">
      <h4 class="post__text">
        {{ text }}
      </h4>
      <button class="post__likes" @click="onPresslike()">
        <img
          class="post__like-icon"
          :src="likeIconSource"
          alt="like icon"
          onerror="alert('error')"
        />
        {{ postLikes }}
      </button>
    </div>
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
      postLikes: 0,
      imageSource: require("../assets/Photo.png"),
    };
  },
  computed: {
    isLiked: {
      cache: false,
      set(val) {
        const likes = JSON.parse(localStorage.getItem("likes") || "{}");
        likes[this._id] = val;
        if (likes.length > 12) likes.shift();
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
      const isLiled = (this.isLiked = !this.isLiked);
      this.setLikeIconSource();
      this.postLikes += isLiled ? 1 : -1;
      this.$emit(isLiled ? "like" : "dislike", { _id: this._id });
    },
    setLikeIconSource() {
      this.likeIconSource = this.isLiked
        ? require("../assets/like-filled.svg")
        : require("../assets/like.svg");
    },
  },
  mounted() {
    this.setLikeIconSource();
    this.postLikes = this.likes;
    const img = new Image();
    img.src = this.imageUrl;
    img.onload = () => {
      this.imageSource = this.imageUrl;
    };
  },
};
</script>

<style>
.post {
  text-align: center;
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 256px;
}

.post__image-wrapper {
  display: flex;
  width: 256px;
  height: 256px;
  align-items: center;
  justify-content: center;
  background-color: #f9f9fb;
  border-radius: 8px;
  overflow: hidden;
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

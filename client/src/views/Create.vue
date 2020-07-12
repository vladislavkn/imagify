<template>
  <div class="create">
    <form @submit.prevent="onSubmit">
      <div class="form__image-preview">
        <img
          class="image"
          v-if="imageUrl.length > 7"
          :src="imageUrl"
          alt="Your image"
        />
        <img
          class="image"
          v-else
          src="@/assets/Photo.png"
          alt="Placeholder image"
        />
      </div>

      <input
        v-model.lazy="imageUrl"
        type="text"
        class="form__input"
        placeholder="Enter image url..."
      />
      <input
        v-model="text"
        type="text"
        class="form__input"
        placeholder="Enter text..."
      />
      <button class="form__submit-btn">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Create",
  data() {
    return {
      imageUrl: "",
      text: "",
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.create {
  display: flex;
  justify-content: center;
  padding: 64px;
}

.form__image-preview {
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  max-width: 100%;
}

.form__input {
  display: block;
  width: 256px;
  padding: 8px;
  margin-bottom: 16px;
  background: #f9f9fb;
  border: 1px solid #e6e6eb;
  border-radius: 4px;
  outline: none;

  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #000;
}

.form__submit-btn {
  padding: 8px 16px;
  background: transparent;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1rem;
  border: 1px solid #595cff;
  border-radius: 4px;
  outline: none;
}

.form__submit-btn:active {
  background-color: rgba(89, 92, 255, 0.1);
}

@media screen and (max-width: 360px) {
  .create {
    padding: 32px;
  }

  .form__input {
    width: 100%;
  }
}
</style>

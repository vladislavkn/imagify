<template>
  <div id="app">
    <header>
      <h2 class="header__title">Imagify</h2>
      <Nav />
    </header>
    <router-view />
  </div>
</template>
<script>
import Nav from "@/components/Nav";

export default {
  components: { Nav },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: "Inter", Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

.image {
  max-width: 100%;
  height: auto;
}

.header__title {
  text-align: center;
  letter-spacing: 0.1rem;
  padding-top: 24px;
}
</style>

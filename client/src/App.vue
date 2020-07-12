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
#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
}

.header__title {
  text-align: center;
  letter-spacing: 0.1rem;
}
</style>

<template>
  <nav>
    <router-link to="/" class="nav__link" exact-active-class="nav__link_active">
      Main
    </router-link>
    <router-link to="/create" class="nav__link" active-class="nav__link_active">
      Create
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-evenly;
  padding: 32px 0;
}

.nav__link {
  text-decoration: none;
  line-height: 1.5rem;
  color: #000;
}

.nav__link_active {
  color: #595cff;
}
</style>

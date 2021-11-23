<template>
  <div id="nav">
    <router-link :class="{ active: $route.name === 'Home' }" to="/"
      >Home</router-link
    >
    |
    <router-link :class="{ active: $route.name === 'Cart' }" to="/cart"
      >Cart</router-link
    >
    <div class="cart-icon">
      cart
      <span>{{ totalQty }}</span>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },
  computed: {
    totalQty() {
      return this.$store.getters.totalQty;
    },
  },
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

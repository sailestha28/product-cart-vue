<template>
  <div id="nav">
    <div class="nav-wrap">
      <div class="site-logo">
        <router-link to="/">Logo Area</router-link>
      </div>
      <ul class="menu">
        <li>
          <router-link :class="{ active: $route.name === 'Home' }" to="/"
            >Home</router-link
          >
        </li>
        <li>
          <router-link :class="{ active: $route.name === 'Cart' }" to="/cart">
            Cart</router-link
          >
        </li>
      </ul>

      <div class="cart-icon">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
          />
        </svg>
        <span>{{ totalQty }}</span>
        <div class="mini-cart">
          <h4>Product in Cart</h4>
          <MiniCart
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
  <section>
  <router-view />
  </section>
</template>
<script>
import MiniCart from "../src/components/cart/MiniCart.vue";
export default {
  components: {
    MiniCart,
  },
  data() {
    return {
      total: "0",
    };
  },
  computed: {
    products() {
      return this.$store.getters.cartItems;
    },
    totalPrice() {
      return this.products.price * this.products.quantity;
    },
    totalQty() {
      return this.$store.getters.totalQty;
    },
  },
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

#nav {
  padding: 10px 30px;
  background-color: #f6f6f6;

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    li {
      display: inline-block;
      padding: 0 15px;
    }
    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;

      &.router-link-exact-active {
        color: #0d6efd;
      }
    }
  }
}

.nav-wrap {
  display: flex;
  justify-content: space-between;
  .site-logo {
    > a {
      color: #1e1e1e;
      text-decoration: none;
      font-weight: bold;
      font-size: 26px;
    }
  }
}

.cart-icon {
  position: relative;
  cursor: pointer;
  &:hover{
    .mini-cart{
      opacity: 1;
      visibility: visible;
      z-index: 1;
      transform:translateY(0);
    }
  }
  > span {
    position: absolute;
    background-color: black;
    color: #fff;
    left: calc(100% - 5px);
    font-size: 11px;
    padding: 2px 3px;
    top: -5px;
    border-radius: 4px;
  }
}

.mini-cart {
  position: absolute;
  right: 0;
  top: 100%;
  background: #f6f6f6;
  width: 290px;
  box-shadow: 0px 3px 8px #0000005e;
  border-radius: 5px;
  overflow: hidden;
  max-height: 200px;
  overflow: auto;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity ease 0.4s ,transform ease 0.5s;
  z-index: -1;
  > h4 {
    background: white;
    padding: 6px 15px;
    font-size: 15px;
    margin-bottom: 0;
  }
  .list-wrap {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #878787;    padding: 5px 15px;
  }
  .img-wrap {
    width: 60px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text-wrap {
    width: calc(100% - 60px);
    padding-left: 15px;
    .title {
      font-size: 14px;
      margin-bottom: 0;
    }
    p {
      margin-bottom: 0;
      font-size: 13px;
      color: #1e1e1e;
    }
  }
}

section{
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>

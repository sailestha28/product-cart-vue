import { createStore } from "vuex";

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    productQuantity: (state) => (product) => {
      const item = state.cart.find((i) => i.id === product.id);
      if (item) return item.quantity;
      else return null;
    },
    cartItems: (state) => {
      return state.cart;
    },
    totalPrice: (state) => {
      return state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    },
    totalQty: (state) => {
      return state.cart.reduce((a, b) => a + b.quantity, 0);
    },
  },
  mutations: {
    addToCart(state, { product, qty }) {
      let item = state.cart.find((i) => i.id === product.id);
      if (item) {
        if (qty >= 2) {
          item.quantity += qty;
          console.log('fulladd'+ qty);
        } else {
          if (qty <= 0) {
            alert("Enter value form above zero");
          } else {
            item.quantity++;
            console.log('qty item'+ item.quantity);
          }
        }
      } else {
        state.cart.push({ ...product, quantity: qty });
        console.log('normal'+ qty);
      }
      updateLocalStorage(state.cart);
    },
    removeFromCart(state, { product, qty }) {
      let item = state.cart.find((i) => i.id === product.id);
      console.log(qty);
      if (item) {
        item.quantity -= qty;
        state.cart = state.cart.filter((i) => i.id !== product.id);
      }
      updateLocalStorage(state.cart);
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem("cart");

      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
  },
  actions: {},
  modules: {},
});

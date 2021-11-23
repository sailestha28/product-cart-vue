<template>
  <div class="cart">
    <h1>Cart list</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>final price</th>
        </tr>
      </thead>
      <tbody>
    <CartItemCard 
    v-for="product in products"
    :key="product.id"
    :product="product"
    />
      </tbody>
      <tfoot>
   <CartFooter 
   
    :product="product"
   />
      </tfoot>
    </table>

  </div>
</template>
<script >
import CartItemCard from "../components/cart/CartItemCard.vue";
import CartFooter from "../components/cart/CartFooter.vue";
export default {
  components:{
    CartItemCard,
    CartFooter
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
    totalPrice(){
      return this.products.price * this.products.quantity
    }

  },
};
</script>

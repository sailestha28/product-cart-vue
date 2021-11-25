<template>
    <div class="mini-cart-item">
        <div class="list-wrap">
            <div class="img-wrap">
                <img :src="product.image" alt="">
            </div>
            <div class="text-wrap">
                <h3 class="title">
             {{product.name}}
                </h3>
                <p class="price">
            Rs {{product.price}}
                </p>
                <p class="qty">
          Quantity: {{product.quantity}}

                </p>
                   <button class="remove" @click="removeFromCart()">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['product'],
      methods: {
    // addToCart() {
    //   let valueInput = this.inputToCart;
    //   // if (this.inputToCart > 1) {
    //   //   valueInput = this.inputToCart;
    //   // } else {
    //   //   valueInput = this.item;
    //   // }
    //   this.$store.commit("addToCart", { product: this.item, qty: valueInput });
    // },
    removeFromCart() {
        let valueRemove = this.product.quantity;
        console.log(valueRemove);
      this.$store.commit("removeFromCart", { product: this.product , qty: valueRemove});
    },
  },


}
</script>

<style lang="scss" scoped>

</style>
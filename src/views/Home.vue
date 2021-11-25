<template>
  <div class="home">
    <div class="product-cards-container">
      <div class="container">
        <div class="row">
          <ProductSummaryCard
            v-for="product in items"
            :key="product.id"
            :product="product"
            v-on:view-product="viewProduct($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import items from "../data/items.js";
import ProductSummaryCard from "../components/products/ProductSummaryCard.vue";
// import ProductDescriptionDrawer from "../components/products/ProductDescriptionDrawer.vue";
export default {
  name: "Home",
  components: {
    ProductSummaryCard,
    // ProductDescriptionDrawer,
  },
  data() {
    return {
      items: items,
      product: null,
      active: {
        product_drawer: true,
      },
    };
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
      console.log(this.product);
    },
    closeProductDrawer() {
      this.active.product_drawer = false;
    },
  },
};
</script>
<style lang="scss">
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

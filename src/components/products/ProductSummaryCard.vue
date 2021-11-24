<template>

    <div class="col-md-6">
      <div class="card">
        <h3>{{ product.name }}</h3>
        <!-- <h3>{{ product.detail }}</h3> -->
        <h4 class="price">price: Rs{{ product.price }}</h4>
        <!-- <p class="hero">Hero: {{ product.hero }}</p> -->
        <p class="info">info: {{ product.info }}</p>
        <!-- <p class="offer">offer: {{ product.offer }}</p> -->
        <img :src="product.image" alt="" />

      <button class="view-product-btn" v-on:click="$emit('view-product',product)"> View </button> 
      <router-link :to="{name:'Detail',params:{id:product.id}}" >view detail</router-link>
      </div>
   
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.description.substring(0, 150);
    },
  },
};
</script>
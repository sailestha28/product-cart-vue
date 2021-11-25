<template>
  <div class="col-12 col-md-4 ">
    <div class="card">
      <router-link :to="{ name: 'Detail', params: { id: product.id } }" class="link-to">
        <img :src="product.image" alt="Card image cap" class="card-img-top"  />
        <div class="card-body">
          <h3 class="card-title">{{ product.name }}</h3>
          <h4 class="price">price: Rs {{ product.price }}</h4>
        </div>
      </router-link>
      <!-- <button
        class="view-product-btn"
        v-on:click="$emit('view-product', product)"
      >
        View
      </button> -->
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

<style scoped>
.link-to{
text-decoration: none;  color:#000;
}
.card{
  margin-bottom: 30px;
}
.card-title{
  font-size: 22px;
  color:#000;
  margin-bottom: 15px;
  
}
.price{
  color: rgb(77, 77, 77);
  font-size: 18px;
}
</style>
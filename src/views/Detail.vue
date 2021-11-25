<template>
  <div class="detail_page">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <div class="img">
            <img :src="item.image" alt="" />
          </div>
          <div class="text-wrap">
            <h1 class="card-title">
              {{ item.name }}
            </h1>
            <p class="price">Rs {{ item.price }}</p>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Rs</span>
              </div>
              <input type="number" min="1"  max="5" v-model="inputToCart" class="form-control" />
            </div>

            <div class="button-container mb-3">
              <!-- <button class="remove" @click="removeFromCart()">Remove</button> -->
              <button class="btn btn-primary" @click="addToCart()">
                Add To Cart
              </button>
            </div>
            <p class="detial">
              {{ item.detail }}
            </p>
            <p class="hero">
              {{ item.hero }}
            </p>
            <p class="info">
              {{ item.info }}
            </p>
            <p class="offer">
              {{ item.offer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import items from "../data/items";
export default {
  name: "Detail",
  data() {
    return {
      item: {},
      inputToCart: 1,
    };
  },
  created() {
    let id = this.$route.params.id;
    // console.log(this.$route.params.id);
    this.item = items.find((item) => item.id == id);
    // this.item = items.find((item) => item.name == id);
    //  this.item  =  items.find(function(item){
    //     return item.name == id
    //   })
  },
  methods: {
    addToCart() {
      let valueInput = this.inputToCart;
      console.log(valueInput);
      this.$store.commit("addToCart", { product: this.item, qty: valueInput });
    },
    // removeFromCart() {
    //   this.$store.commit("removeFromCart", this.item);
    // },
  },
};
</script>

<style scoped>
.card-body {
  display: flex;
}
.text-wrap {
  margin-left: 30px;
  text-align: left;
}
.card-title{
  font-size: 20px;
}
</style>

<style lang="scss" scoped>
.detail_page{
  .card-body{
    display: flex;
    flex-wrap:wrap;
    .img{
      width: 300px;
      @media(max-width: 575px){
        width: 100%;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .text-wrap{
      width: calc(100% - 300px - 30px);
           @media(max-width: 575px){
        width: 100%;
        margin-left: 0;
        margin-top: 30px;
      }
    }
    .input-group{
      max-width: 150px;
    }
  }
}
</style>
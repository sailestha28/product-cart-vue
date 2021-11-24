<template>
  <div>
    {{ item.name }}
    <img :src="item.image" alt="" />
  </div>
</template>
<script>
import items from "../data/items";
export default {
  name: "Detail",
  data() {
    return {
      item: {},
    };
  },
  created() {
    let id = this.$route.params.id;
    console.log(this.$route.params);
    // this.item = items.find((item) => item.id == id);
    // this.item = items.find((item) => item.name == id);
   this.item  =  items.find(function(item){
      return item.name == id
    })
  },
};
</script>
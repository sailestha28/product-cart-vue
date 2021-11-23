<template>
    <tr>
        <th></th>
        <th>
            Total
        </th>
        <th>
   {{totalQty}}
        </th>
        <th>
           Rs {{totalPrice}}
        </th>
    </tr>
</template>
<script>
export default {
    computed:{
        totalPrice(){
            return this.$store.getters.totalPrice
        },
        totalQty(){
            return this.$store.getters.totalQty
        }
    }
}
</script>
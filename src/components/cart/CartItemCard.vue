<template>
  
        <tr>
          <td>
            {{product.name}}
          </td>
          <td>
             {{product.price}}
          </td>
          <td>
           {{product.quantity}}
          </td>
          <th>
             {{item_cost}}
          </th>
        </tr>
   
  
</template>
<script>
export default {
    props:['product'],
    computed:{
        description(){
            return this.product.info
        },
        item_cost(){
            return this.product.price * this.product.quantity
        }
    }

}
</script>
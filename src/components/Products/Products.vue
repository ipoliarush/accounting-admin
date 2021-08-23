<template>
  <div class="products">
    <div class="products__head">
      <h4 class="products__title">
        Товары
      </h4>
    </div>
    <products-table></products-table>
  </div>
</template>

<script>
import ProductsTable from './ProductsTable.vue'

export default {
  name: 'Products',
  components: {ProductsTable},
  data:() => ({})
}
</script>

<style lang="scss" scoped>
.products {
  .products__head {
    margin-bottom: 20px;
  }
  .products__title {
    @include color('textTitle')
  }
}
</style>

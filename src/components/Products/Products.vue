<template>
  <div class="products">
    <div class="products__head">
      <h4 class="products__title">
        Товары
      </h4>
      <div class="add">
        <div class="add__button">
          <font-awesome-icon class="add__icon" :icon="['fas', 'plus']" />
          Добавить
        </div>
      </div>
    </div>
    <products-table />
    
    
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
    display: flex;
    justify-content: space-between;
  }
  .products__title {
    @include color('textTitle')
  }

  .add {

  }
  .add__button {
    color: #FFF;
    background: $bgBtnBlue;

    @include btn;
    @include btnBlue;
  }
  .add__icon {
    margin-right: 7px;
  }
}
</style>

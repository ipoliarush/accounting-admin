<template>
  <div class="app-content">
    <div class="wrapper">
      <div class="content">
        <products></products>
      </div>
    </div>
  </div>
</template>

<script>
import Products from '../Products/Products.vue'

export default {
  name: 'AppContent',
  components: {Products},
  data:() => ({})
}
</script>

<style lang="scss">
.app-content {
  
  transition: .3s ease all;
  padding: 0;
  position: relative;
  margin-left: 0;
  z-index: 994;

  &-active {
    margin-left: 260px;
  }

  .wrapper {
    padding: 15px 30px 0;
    margin-top: 60px;
  }
}
</style>

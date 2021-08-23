<template>
  <div class="products-table">
    <div class="table">
      <div class="head table__head">
        <div class="head__row">
          <div class="head__item head__item--name">Наименование</div>
          <div class="head__item">Закуплено</div>
          <div class="head__item">Продано</div>
          <div class="head__item">Наличие</div>
          <div class="head__item">Резерв</div>
          <div class="head__item">В пути</div>
          <div class="head__item">Действия</div>
        </div>
      </div>
      <div class="body table__body">
        <div v-for="(item, index) in products" :key="index" class="body__row">
          <div class="body__item body__item--name">{{ item.name }}</div>
          <div class="body__item">{{ item.purchased }}</div>
          <div class="body__item">{{ item.sold }}</div>
          <div class="body__item">{{ item.availability }}</div>
          <div class="body__item">{{ item.reserve }}</div>
          <div class="body__item">{{ item.expected }}</div>
          <div class="body__item">
            <div class="body__action action">
              <div class="action__item">
                <font-awesome-icon :icon="['far', 'edit']" />
              </div>
              <div class="action__item">
                <font-awesome-icon :icon="['far', 'trash-alt']" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsTable',
  components: {},
  data:() => ({
    products: [
      {
        name: 'Датчик XOSS',
        purchased: 20,
        sold: 15,
        availability: 5,
        reserve: 0,
        expected: 10,
      },
      {
        name: 'Крепление',
        purchased: 12,
        sold: 15,
        availability: 5,
        reserve: 0,
        expected: 10,
      },
      {
        name: 'Переходник',
        purchased: 20,
        sold: 15,
        availability: 5,
        reserve: 0,
        expected: 10,
      },
    ]
  })
}
</script>

<style lang="scss" scoped>
.products-table {
  border-radius: 5px;
  
  @include background-color('bgCard');
  @include box-shadow('shadowTable');

  .table {
    width: 100%;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }
  .body {
    display: flex;
    flex-direction: column;
  }
  .head__row {
    font-size: 12px;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;

    @include color('colorTableHead');
  }
  .body__row {
    display: flex;
    flex-direction: row;
  }
  .head__item, .body__item {
    padding: 15px 30px;
    font-weight: 400;
    letter-spacing: 1px;
    flex: 1 2 200px;
    text-align: center;
    min-width: 120px;

    &--name {
      flex: 2 1 300px;
      text-align: left;
      min-width: 200px;
    }
  }
  .head__item {
    border-bottom: 1px solid;
    @include border-color('borderTable');
  }
  .body__item {
    font-size: 15px;
    font-weight: 300;
    
    @include color('colorTableBody');
  }
  .action {
    justify-content: center;
    display: flex;
    flex-direction: row;
  }
  .action__item {
    margin: 0 5px;
    cursor: pointer;

    &:hover {
      @include color('textLink');
    }
  }
  .body__row {
    &:hover {
      @include background-color('bgTableHover');
    }
  }
  
}
</style>

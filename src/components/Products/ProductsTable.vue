<template>
  <div class="products-table">
    <table class="table">
      <thead class="head table__head">
        <tr class="head__row">
          <th class="head__item head__item--name">Наименование</th>
          <th class="head__item">Закуплено</th>
          <th class="head__item">Продано</th>
          <th class="head__item">Наличие</th>
          <th class="head__item">Резерв</th>
          <th class="head__item">В пути</th>
          <th class="head__item">Действия</th>
        </tr>
      </thead>
      <tbody class="body table__body">
        <tr v-for="(item, index) in products" :key="index" class="body__row">
          <th class="body__item body__item--name">{{ item.name }}</th>
          <th class="body__item">{{ item.purchased }}</th>
          <th class="body__item">{{ item.sold }}</th>
          <th class="body__item">{{ item.availability }}</th>
          <th class="body__item">{{ item.reserve }}</th>
          <th class="body__item">{{ item.expected }}</th>
          <th class="body__item body__item--action">
            <div class="body__action">
              <div class="body__circle"></div>
              <div class="body__circle"></div>
              <div class="body__circle"></div>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
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
    border-collapse: collapse;
    width: 100%;
  }

  .head__item, .body__item {
    padding: 15px 30px;
    font-weight: 400;
    letter-spacing: 1px;

    &--name {
      width: 250px;
      text-align: left;
    }
  }

  .head__row {
    border-bottom: 1px solid;
    font-size: 12px;
    text-transform: uppercase;

    @include color('colorTableHead');
    @include border-color('borderTable');
  }

  .body__item {
    @include color('colorTableBody');
    font-size: 15px;
    font-weight: 300;

    &--action {
      
    }
  }
  .body__row {

    &:hover {
      @include background-color('bgTableHover');
    }
  }
  .body__action {
    width: 10px;
    padding: 3px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .body__circle {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    margin: 1px;
    @include background-color('colorTableBody');
  }
}
</style>

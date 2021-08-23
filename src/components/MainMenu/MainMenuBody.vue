<template>
  <div class="main-menu-body">
    <ul class="nav">
      <li class="nav__item">
        <a href="" class="nav__link nav__link_active">
          Товары
        </a>
      </li>
      <li class="nav__item">
        <a href="" class="nav__link">
          Продажи
        </a>
      </li>
      <li class="nav__item">
        <a href="" class="nav__link">
          Закупки
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'MainMenuBody',
  data:() => ({})
}
</script>

<style lang="scss">
.main-menu-body {
  .nav {
    display: flex;
    flex-direction: column;
  }
  .nav__item {
    margin: 0 1rem;
  }
  .nav__link {
    display: block;
    text-decoration: none;
    font-size: 15px;
    font-weight: 400;
    padding: 10px 12px;
    border-radius: 5px;

    @include color('textPrimary');

    &_active {
      @include background-color('bgMenuActive');
      @include color('textLink');
    }
  }
}
</style>

<template>
  <div class="main-menu-footer">
    <form class="form">
      <div class="form__name">Темы</div>
      <div class="form__group">
        <input @click="change('dark')" :checked="theme === 'dark' ? true : false" name="theme" id="radio-dark" value="dark" type="radio" class="form__radio">
        <label for="radio-dark" class="form__label">Темная</label>
      </div>
      <div class="form__group">
        <input @click="change('light')" :checked="theme === 'light' ? true : false" name="theme" id="radio-light" value="light" type="radio" class="form__radio">
        <label for="radio-light" class="form__label">Светлая</label>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MainMenuFooter',
  data:() => ({}),
  computed: {
    ...mapGetters({
      theme: 'GET_THEME'
    })
  },
  methods: {
    ...mapMutations({
      change: 'THEME_CHANGE'
    })
  }
}
</script>

<style lang="scss" scoped>
.main-menu-footer {
  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-radius: 5px;
    margin: 10px 12px; 
    padding: 10px;


    @include color('textPrimary');
    @include border-color('borderMenuGroup');
    @include background-color('bgMenu');

  }
  .form__name {
    position: absolute;
    top: -12px;
    left: 15px;
    @include background-color('bgMenu');
    padding: 0 5px;
    font-size: 16px;
  }
  .form__group {
    margin: 5px 0;
  }
  .form__radio {
    opacity: 0;
    display: none;
  }
  input[type=radio]:checked + label::after {
    opacity: 1!important;
    transform: scale(1)!important;
  }
  .form__label {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      border: 1px solid;
      border-radius: 50%;
      width: 17px;
      height: 17px;
      margin-right: 10px;
      margin-left: 10px;

      @include border-color('borderMenuGroup');
    }
    &::after {
      left: 10px;
      content: '';
      position: absolute;
      height: 6px;
      width: 6px;
      margin-left: 15px;
      border-radius: 50%;
      background-color: #5A8DEE;
      opacity: 0;
      transform: scale(3.6);
      transition: all .3s cubic-bezier(.35,.9,.4,.9);
    }
  }
}
</style>

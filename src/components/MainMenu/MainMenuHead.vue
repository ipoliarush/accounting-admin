<template>
  <div class="main-menu-head">
    <ul class="nav">
      <li class="nav__item">
        <a class="nav__link" href="" v-on:click.prevent="1">
          <div class="nav__logo">
            Admin
          </div>
        </a>
      </li>
      <li class="nav__item">
        <a href="" class="nav__link">
          <div class="circle nav__icon">
            <div class="circle__outer"></div>
            <div class="circle__inner"></div>
          </div>
        </a>
      </li>
      <li class="nav__item">
        <a href="" v-on:click.prevent='close()' class="nav__link">
          <div class="close nav__icon">
            <div class="close__line close__line_left"></div>
            <div class="close__line close__line_right"></div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'MainMenuHead',
  data:() => ({}),
  methods: {
    ...mapMutations({
      close: 'MOBILE_MENU_CLOSE'
    })
  }
}
</script>

<style lang="scss">
.main-menu-head {
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    height: 40px;
  }
  .nav__link {
    text-decoration: none;
  }
  .nav__logo {
    text-transform: uppercase;
    @include color('textLink');
    font-weight: bold;
    font-size: 25px;
  }
  .circle {
    display: none;
    position: relative;
    height: 25px;
    width: 25px;
  }
  .circle__outer {
    position: absolute;
    height: 21px;
    top: 2px;
    left: 2px;
    width: 21px;
    border: 2px solid #5A8DEE;
    border-radius: 50px;
  }
  .circle__inner {
    top: 8px;
    left: 8px;
    height: 9px;
    width: 9px;
    border: 2px solid #5A8DEE;
    border-radius: 50px;
    position: absolute;
  }
  .close {
    position: relative;
    height: 25px;
    width: 25px;
  }
  .close__line {
    display: block;
    @include background-color('textLink');
    width: 12px;
    height: 2px;
    position: absolute;
    top: 12px;
    left: 6px;

    &_left {
      transform: rotate(45deg);
    }
    &_right {
      transform: rotate(135deg);
    }
  }
}
</style>

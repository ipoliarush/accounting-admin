<template>
  <div id="app" :class="'theme-' + theme + ' app'">
    <app-header></app-header>
    <main-menu></main-menu>
    <div class="overlay" :class="{ 'overlay__hide': !isMobileMenu }"></div>
    <app-content></app-content>
  </div>
</template>

<script>
import AppHeader from "./components/Header/AppHeader.vue"
import MainMenu from './components/MainMenu/MainMenu.vue'
import AppContent from './components/Content/AppContent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    AppHeader,
    MainMenu,
    AppContent
  },
  data:() => ({
    themeName: 'theme-dark'
  }),
  computed: {
    ...mapGetters({
      isMobileMenu: 'IS_MOBILE_MENU',
      theme: 'GET_THEME'
    })
  }
}
</script>

<style lang="scss">
.app {
  width: 100%;
  min-height: 1000px;
  overflow: hidden;
  @include background-color('bgBody');
  

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 120vh;
    background-color: rgba(0,0,0,.5);
    z-index: 996;
    display: block;

    &__hide {
      display: none!important;
    }
  }
}
</style>

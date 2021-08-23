<template>
  <div class="main-menu" :class="{ 'main-menu__hide': !isMobileMenu }">
    <div class="group">
      <main-menu-head></main-menu-head>
      <main-menu-body></main-menu-body>
    </div>
    <main-menu-footer></main-menu-footer>
  </div>
</template>

<script>
import MainMenuHead from './MainMenuHead.vue'
import MainMenuBody from './MainMenuBody.vue'
import MainMenuFooter from './MainMenuFooter.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MainMenu',
  components: {
    MainMenuHead,
    MainMenuBody,
    MainMenuFooter
  },
  data:() => ({}),
  computed: {
    ...mapGetters({
      isMobileMenu: 'IS_MOBILE_MENU'
    })
  }
}
</script>

<style lang="scss" scoped>
.main-menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  left: -260px;
  transition: width .25s, opacity .25s, transform .25s;
  border-right-width: 1px;
  border-right-style: solid;
  height: 100%;
  overflow: hidden;
  z-index: 999;

  top: 0;
  opacity: 1;
  transform: translate3d(260px, 0, 0);

  @include background-color('bgMenu');
  @include border-color('borderMenu');

  &__hide {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }

  .group {
    display: flex;
    flex-direction: column;
  }
}
</style>

<template>
  <div class="app-header" :class="{ fixed: isFixed }">
    <div class="header">
      <a href="" v-on:click.prevent='open()' class="hamburger">
        <b-icon-list></b-icon-list>
      </a>
      <a href="" class="user">
        <b-icon-person-circle></b-icon-person-circle>
      </a>
    </div>
  </div>
</template>

<script>
import { BIconList, BIconPersonCircle } from 'bootstrap-vue'
import { mapMutations } from 'vuex'

export default {
  name: 'AppHeader',
  components: {
    BIconList,
    BIconPersonCircle
  },
  data:() => ({
    isFixed: false
  }),
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('scroll', this.getScroll)
    })

    this.getScroll()
  },
  methods: {
    ...mapMutations({
      open: 'MOBILE_MENU_OPEN'
    }),
    getScroll() {
      this.isFixed = window.scrollY ? true : false
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.getScroll)
  }
}
</script>

<style lang="scss">
.app-header {
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  background-color: transparent;
  width: 100%;
  transition: .3s ease all;
  z-index: 995;

  &.fixed {
    @include background-color('bgCard');
    box-shadow: rgba(26, 35, 59, .7) -8px 12px 18px 0;
  }

  .header {
    height: 67px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px;
  }

  .hamburger {
    display: flex;
    font-size: 1.75rem;
    @include color('textPrimary');

    &:hover {
      @include color('textLink');
    }
  }
  .user {
    display: flex;
    font-size: 2rem;
    @include color('textPrimary');

    &:hover {
      @include color('textLink');
    }
  }
}
</style>

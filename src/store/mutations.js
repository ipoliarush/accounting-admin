export default {
  MOBILE_MENU_OPEN(state) {
    state.isMobileMenu = true
    document.body.classList.add('overflow-mm-off')
    document.body.classList.remove('overflow-mm-on')
  },
  MOBILE_MENU_CLOSE(state) {
    state.isMobileMenu = false
    document.body.classList.add('overflow-mm-on')
    document.body.classList.remove('overflow-mm-off')
  },
  THEME_CHANGE(state, item) {
    state.theme = item
    localStorage.setItem('theme', JSON.stringify(item))
  }
}

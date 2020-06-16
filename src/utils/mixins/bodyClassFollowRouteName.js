export default {
  computed: {
    calcCurrentRouteName() {
      return `${this.$route.name}`.toLowerCase()
    }
  },
  watch: {
    calcRouteName: {
      calcCurrentRouteName (nv, ov) {
        ov && document.body.classList.remove(`page-${ov}`.toLowerCase())
        nv && document.body.classList.add(`page-${nv}`.toLowerCase())
      },
      immediate: true
    }
  }
}

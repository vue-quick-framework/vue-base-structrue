export default {
  computed: {
    calcCurrentRouteName () {
      return `${this.$route.name}`.toLowerCase()
    }
  },
  watch: {
    calcCurrentRouteName: {
      hanlder (nv, ov) {
        ov && document.body.classList.remove(`page-${ov}`.toLowerCase())
        nv && document.body.classList.add(`page-${nv}`.toLowerCase())
      },
      immediate: true
    }
  }
}

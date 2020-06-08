import isMobile from '../libs/isMobile'
export default {
  bind (el, binding) {
    const mobileName = binding.value || 'mobile'
    const notMobileName = `not-${mobileName}`
    function check () {
      if (isMobile()) {
        el.classList.remove(notMobileName)
        el.classList.add(mobileName)
      } else {
        el.classList.remove(mobileName)
        el.classList.add(notMobileName)
      }
    }
    check()
    window.addEventListener('resize', check)
  }
}

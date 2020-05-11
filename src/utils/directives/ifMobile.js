export default {
  bind (el, binding) {
    const mobileName = binding.value || 'mobile'
    const notMobileName = `not-${mobileName}`
    function check () {
      if (/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
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

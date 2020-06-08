// 解决el-select filterable 移动端focus不弹起软键盘
import isMobile from '../../libs/isMobile'
export default {
  inserted (el, binding, vnode) {
    const input = el.querySelector('input')
    if (input && isMobile()) {
      input.removeAttribute('readonly')
      input.oninput = function (event) {
        // binding.value && vnode.context.$refs[binding.value] && vnode.context.$refs[binding.value].debouncedQueryChange(event)
        binding.value && vnode.context.$refs[binding.value] && vnode.context.$refs[binding.value].debouncedOnInputChange(event)
      }
      // input.onblur = () => { // 此方法性能 比 MutationObserver 高
      //   // 至少要超过200ms, 源码200ms后添加readonly
      //   setTimeout(() => {
      //     input.removeAttribute('readonly')
      //   }, 300)
      // }
      el.observer = MutationObserver && new MutationObserver((mutations, observer) => {
        input.removeAttribute('readonly')
      }).observe(input, { attributes: true, characterData: true, attributeOldValue: true })
    }
  },
  unbind (el) {
    el.observer && el.observer.disconnect()
  }
}

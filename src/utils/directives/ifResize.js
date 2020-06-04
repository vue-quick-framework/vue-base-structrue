import getComputedStyle from '../libs/getComputedStyle'
// https://www.cnblogs.com/diligenceday/p/5022346.html
const config = {
  // 事件来监听某个 DOM 的子节点的改变。当元素的 style 发生变化时，MutationObserver 会监听到 DOM 的 attributes改变，当元素的内容发生变化时，MutationObserver 会监听到 characterData 改变，……
  attributes: true, // 监听属性变化
  // childList: true, // 该元素的子元素新增或者删除
  // subtree: true, // 该元素的所有子元素新增或者删除
  // characterData: true, // 监听text或者comment变化
  // attributeOldValue: true, // 属性原始值
  // characterDataOldValue: true,
  attributeFilter: [
    'style'
  ]
}
export default {
  bind (el, binding) {
    el.resizeDo = () => {
      typeof binding.value === 'function' && binding.value(binding.arg)
    }

    // eslint-disable-next-line no-unused-expressions
    el.observer = MutationObserver && new MutationObserver((mutations, observer) => {
      const { width, height } = getComputedStyle(el)
      if (!(el.oldSize && el.oldSize.width === width && el.oldSize.height === height)) {
        el.oldSize = { width, height }
        el.resizeDo()
      }
      // mutations.forEach((mutation) => {
      //   // console.log('mutation', el.style.width, mutation, observer, el.observer.takeRecords())
      //   const { width, height } = getComputedStyle(el)
      //   if (!(el.oldSize && el.oldSize.width === width && el.oldSize.height === height)) {
      //     el.oldSize = { width, height }
      //     el.resizeDo()
      //   }
      // })
    });
    (el.observer && el.observer.observe(el, config)) || (el.attachEvent && el.attachEvent('onresize', el.resizeDo))
  },
  inserted (el) {
    const { width, height } = getComputedStyle(el)
    el.oldSize = { width, height }
  },
  unbind (el) {
    (el.observer && el.observer.disconnect()) || (el.detachEvent && el.detachEvent('onresize', el.resizeDo))
  }
}

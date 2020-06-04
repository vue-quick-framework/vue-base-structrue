export default {
  bind (el, binding) {
    el.eventUnselfDo = (event) => {
      const isSelf = el === event.target || (el.contains && el.contains(event.target))
      if (!isSelf) {
        // and if it did, call method provided in attribute value
        // vnode.context[binding.expression].apply(null, binding.arg)
        typeof binding.value === 'function' && binding.value(binding.arg)
      }
    }
    Object.keys(binding.modifiers).forEach(key => {
      if (binding.modifiers[key]) {
        document.body.addEventListener && document.body.addEventListener(key, el.eventUnselfDo)
      }
    })
  },
  unbind (el, binding) {
    Object.keys(binding.modifiers).forEach(key => {
      if (binding.modifiers[key]) {
        document.body.removeEventListener && document.body.removeEventListener(key, el.eventUnselfDo)
      }
    })
  }
}

// usage 监听事件为非当前组件时候触发
// nav为hello函数的第一个参数 可以支持多个事件比如.mousedown.click, eg:
// <el-button v-if="num" v-if-event-unself:nav.mousedown.click="hello">test</el-button>
//

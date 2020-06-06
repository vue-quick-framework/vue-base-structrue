// 解决el-select filterable 移动端focus不弹起软键盘
export default {
  inserted (el) {
    const input = el.querySelector('input')
    if (input) {
      input.removeAttribute('readOnly')
      MutationObserver && new MutationObserver((mutations, observer) => {
        input.removeAttribute('readOnly')
      }).observe(input, { attributes: true })
    }
  }
}

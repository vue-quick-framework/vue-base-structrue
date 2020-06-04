// getComputedStyle 该属性是兼容火狐谷歌,不兼容IE8及以下（IE9及以上版本可兼容）
// currentStyle 该属性只兼容IE,不兼容火狐和谷歌
/* eslint-disable */
export default function (element, pseudoClass = null) {
  return getComputedStyle && getComputedStyle(...arguments) || element.currentStyle
}

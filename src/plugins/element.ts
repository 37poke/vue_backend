import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 1. 先定义 debounce 函数（必须放在被调用之前）
const debounce = (callback, delay) => {
  let tid
  // 修复点 1：使用 ...args 接收底层传来的所有参数
  return function (...args) {
    const ctx = self // 或者 this
    tid && clearTimeout(tid)
    tid = setTimeout(() => {
      // 修复点 2：把接收到的 args 数组，原封不动地传给 callback
      callback.apply(ctx, args)
    }, delay)
  }
}

// 2. 然后再重写 ResizeObserver
const _ = window.ResizeObserver
window.ResizeObserver = class ResizeObserver extends _ {
  constructor(callback) {
    callback = debounce(callback, 20)
    super(callback)
  }
}

// 3. 默认导出
export default (app) => {
  app.use(ElementPlus)
}

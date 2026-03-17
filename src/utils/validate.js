//判断是不是一个外部资源
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

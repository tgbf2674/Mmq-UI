function throttle (fn: Function, wait: number) {
  let pre = Date.now()
  return function (this: unknown) {
    let now = Date.now()
    if (now - pre >= wait) {
      fn.call(this, ...arguments)
      pre = Date.now()
    }
  }
}

export default throttle

import {extend,isString,isArray} from '@vue/shared'

export function toObject<T>(arr: Array<T>): Record<string, T> {
  const res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}
export const isNumber = (val: unknown) => typeof val === 'number'
export {
  isArray,
  isString,
  extend,
}
export function addUnit(value: string | number) {
  if (isString(value)) {
    return value
  } else if (isNumber(value)) {
    return `${value}px`
  }
  return ''
}

// import { Type } from '../api'

// interface NewObject {
//   [key: string]: any
// }

export function findCurrentObject(arr: any[], target: string) {
  if (arr?.length) {
    for (const obj of arr) {
      const result = searchObj(obj, target)
      // console.log('result:', result)
      if (result) {
        return result
      }
    }
  }
}

export function searchObj(obj: Record<string, any>, target: string) {

  for (const key in obj) {
    const value = obj[key]

    if (typeof value === 'object') {
      searchObj(value, target)
    }

    if (value === target) {
// console.log(obj)

      return obj
    }
  }
}

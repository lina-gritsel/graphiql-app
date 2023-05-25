import { Fields, QueryArguments, Type } from '../api'

export function findCurrentObject(arr: Fields[], target: string) {
  if (arr?.length) {
    for (const obj of arr) {
      const result = searchObj(obj, target)
      if (result) {
        return result
      }
    }
  }
}

export function searchObj(
  obj: Fields | QueryArguments[] | Type,
  target: string,
) {
  for (const key in obj) {
    const value = obj[key as keyof typeof obj]

    if (typeof value === 'object') {
      searchObj(value, target)
    }

    if (value === target) {
      return obj
    }
  }
}

import { Fields, QueryArguments, Type, Types } from '../api'

export function findCurrentObject(arr: Fields[] | Types[], target: string) {
  if (arr?.length) {
    for (const obj of arr) {
      const result = searchObj(obj, target)
      
      if (result) {
        return result
      }
    }
  }
}

type SearchObj = Fields | QueryArguments[] | Type | Types 

export function searchObj(obj: SearchObj, target: string) {
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

import { Type } from '../api'

interface NewObject {
  [key: string]: any
}

export const flattenObject = (array: any) => {
  const result: any = []

  array.map((object: any) => {
    const getFlattedObject = () => {
      const keysArr = Object.keys(object)
      const newObject: NewObject = {}

      for (let i = 0; i < keysArr.length; i++) {
        const value = object[keysArr[i]]
        if (typeof value === 'string') {
          const key = keysArr[i] as string
          newObject[key] = object[keysArr[i]]
        } else if (value instanceof Array) {
          const argsArray = []
          const argumentObject: NewObject = {}
          value.map((argument) => {
            const createNewArgArr = () => {
              for (const prop in argument) {
                if (typeof argument[prop] !== 'string') {
                  for (const type in argument[prop]) {
                  console.log(type)

                  }
                  // createNewArgArr()

                } else {
                  argumentObject[prop] = argument[prop]
                }
                console.log(argumentObject)
              }
            }
            createNewArgArr()
          })

          // const result = getFlattedObject(theObject[i])
          // if (result) {
          //   break
          // }
        }
      }
    }
    getFlattedObject()
  })

  return result
}

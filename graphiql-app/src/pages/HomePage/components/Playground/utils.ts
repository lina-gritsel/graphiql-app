const ONE_SPACE = ' '
export const TWO_SPACE = '  '

export const getAlignedText = (text: string) => {
  return text
    .split('\n')
    .map((str, index, arr) =>
      !arr[index + 1]?.includes(ONE_SPACE) ? str + ',' : str,
    )
    .join(ONE_SPACE)
    .replaceAll('\n', '')
    .replaceAll(ONE_SPACE, '')
    .replaceAll(',', ', ')
    .replaceAll('{', ' {\n')
    .replaceAll('}', '\n}')
    .split('{\n')
    .map((str, index) => TWO_SPACE.repeat(index * 2) + str)
    .join('{\n')
    .split('\n}')
    .map((str, index, arr) => {
      if (index === 0) {
        return str
      } else {
        return TWO_SPACE.repeat((arr.length - index - 1) * 2) + '}'
      }
    })
    .join('\n')
}

import numbers from './data/numbers'

export function decode(string: string): string {
  const chunkArr = string.split('-')
  return chunkArr.reduce((acc, val) => {
    const key = Object.keys(numbers).find(k => numbers[k] === val)
    if (!key) throw new Error(`key ${key} not found!`)
    acc = acc.concat(key)
    return acc
  }, '')
}

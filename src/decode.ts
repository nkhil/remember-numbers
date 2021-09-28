import pairs from './data/numbers'

export function decode(string: string): string {
  const chunkArr = string.split('-')
  return chunkArr.reduce((acc, val) => {
    const key = Object.keys(pairs).find(k => pairs[k] === val)
    if (!key) throw new Error(`key ${key} not found!`)
    acc = acc.concat(key)
    return acc
  }, '')
}

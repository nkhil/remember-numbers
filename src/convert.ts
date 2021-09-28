import pairs from './data/numbers'

export function calculate(number: string): string {
  const chunked = number.match(/.{1,3}/g)
  if (!chunked) throw new Error('No pairs found')
  const resultArr = chunked.map(chunk => {
    return pairs[chunk]
  })
  return resultArr.join('-')
}

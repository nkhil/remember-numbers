import numbers from './data/numbers'

export function convert(number: string): string {
  const chunked = number.match(/.{1,3}/g)
  if (!chunked) throw new Error('No pairs found')
  const resultArr = chunked.map(chunk => {
    return numbers[chunk]
  })
  return resultArr.join('-')
}

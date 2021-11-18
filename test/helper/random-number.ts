
function generateRandomNumber(): number {
  return Math.floor(Math.random() * 1000)
}

export default function main(iterations: number = 10): string {
  let result = ''
  for (let index = 0; index < iterations; index++) {
    const randomNum = generateRandomNumber()
    result += randomNum
  }
  return result
}

import test from 'ava'
import { convert, decode } from '../src/index'
import generateRandomNumber from './helper/random-number'

test('Remember Numbers can encode and decode random numbers', t => {
  for (let index = 0; index < 100; index++) {
    const randomNumber = generateRandomNumber()
    const converted = convert(randomNumber)
    t.is(randomNumber, decode(converted))
  }
})

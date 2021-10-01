# Remember numbers 💭💯

Remember numbers converts short numbers (eg: phone numbers) into memorable words (for eg: the number `001010090012000` can be converted into `former-faith-football-false-facility` and vice versa)

## Motivation

I made this purely for fun, and to see if I could make it. I really like the idea behind [what3words](https://what3words.com/) and wanted to build something similar to remember numbers. I'm not sure what application this might have.

## Installation

```bash
npm i remember-numbers
```

## Usage

### Convert
```js
const rememberNumbers = require('remember-numbers')

rememberNumbers.convert('911420') // 'entertainment-chamber'
```

### Decode
```js
const rememberNumbers = require('remember-numbers')

rememberNumbers.decode('entertainment-chamber') // '911420'
```

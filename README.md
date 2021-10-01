# Remember numbers 💭💯

Remember numbers converts short numbers (eg: phone numbers) into memorable words (for eg: the number `001010090012000` can be converted into `former-faith-football-false-facility` and vice versa)

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

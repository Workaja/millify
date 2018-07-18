# millify
Convert long numbers into a human-readable format, e.g. `25000` to `'25Rb'`

This script owned by **Izolate**, just forked to Indonesian common Postfixes.

### Installation
```bash
npm i millify
```

### Usage
#### `millify(@number, @decimal)`

First parameter is the number, second parameter is the desired decimal places (default: 1).

```js
import millify from 'millify'

millify(2500)
// 2.5Rb

millify(1250000, 3)
// 1.25Jt

millify(2000000000)
// 2M
```


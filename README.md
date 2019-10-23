# millify-indo
Convert long numbers into a human-readable format, e.g. `25000` to `'25Rb'`

This script originally created by **Izolate**, Customized by **Workaja** using Indonesian common Postfixes.

### Supported Sizing

- Money (we call it: *uang* and *duit*)
- Weight (we use basic weight on: *gram/g* and *miligram/mg*)
- Length (we use basic length on: *milimeter/mm, centimeter/cm* and *meter/m* )
- Storage (we call it: *storage, harddisk, penyimpanan* and *hdd*)

### Installation
```bash
npm i millify-indo
```

### Usage
#### `millify-indo(@angka, @tingkat, @satuan)`

- First parameter is the number

- Second parameter is the type like **uang, duit, gram, penyimpanan** or else (look above).

```js
import millify from 'millify-indo'

millify(2500, 3, 'uang')
// 2.5Ribu

millify(1250000, 6, 'hdd')
// 1.25Megabyte

millify(2000000000)
// 2Milyar
```


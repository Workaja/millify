'use strict'

module.exports = (ugly, decimal) => {

  const suffixes = new Map()
  suffixes.set(3, 'K')
  suffixes.set(6, 'M')
  suffixes.set(9, 'B')
  suffixes.set(12, 'T')

  // Make sure value is a number
  ugly = (num => {
    num = parseFloat(num)
    if (isNaN(num)) throw new Error('Not a number')
    else return num
  })(ugly)

  // Figure out how many digits in the integer
  const digits = Math.floor(Math.log10(Math.abs(ugly))) + 1

  // Figure out the appropriate unit for the number
  const units = ((num, zeroes) => {
    for (let z of suffixes.keys()) if (num > z) zeroes = z
    return { suffix: suffixes.get(zeroes), zeroes }
  })(digits, null)

  const pretty = ugly/Math.pow(10, units.zeroes)

  decimal = (pretty % 1 === 0) ? 1 : Math.max(1, (decimal + 1)) || 2

  if (ugly < 1000) return ugly
  else return `${parseFloat(pretty.toPrecision(decimal))}${units.suffix}`
}

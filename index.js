const indonesia_uang = new Map([
[3, 'Ribu'],[6, 'Juta'],[9, 'Milyar'],[12, 'Triliun'],[15, 'Dwiyar'],[18, 'Trita'],
[21, 'Triyar'],[24, 'Caturta'],[27, 'Caturyar'],[30, 'Pancata'],[33, 'Pancayar'],
[36, 'Sadta'],[39, 'Sadyar'],[42, 'Saptata'],[45, 'Saptayar'],[48, 'Hastata'],
[51, 'Hastayar'],[54, 'Nawata'],[57, 'Nawayar'],[60, 'Dasata'],[63, 'Dasayar']
]);

const indonesia_miligram = new Map([
  [2, 'Gram'],[3, 'Kilogram'],[4, 'Ton'],[5, 'Kiloton'],[6, 'Megaton']
]);

const indonesia_gram = new Map([
  [2, 'Kilogram'],[3, 'Ton']
]);

const indonesia_milimeter = new Map([
  [1, 'Centimeter'],[2, 'Dekameter'],[3, 'Meter'],[4, 'Desimeter'],[5, 'Hektometer'],
  [6, 'Kilometer']
]);

const indonesia_centimeter = new Map([
  [1, 'Dekameter'],[2, 'Meter'],[3, 'Desimeter'],[4, 'Hektometer'],[5, 'Kilometer']
]);

const indonesia_meter = new Map([
  [1, 'Desimeter'],[2, 'Hektometer'],[3, 'Kilometer']
]);

const indonesia_hdd = new Map([
  [3, 'Kilobyte'],[6, 'Megabyte'],[9, 'Gigabyte'],[12, 'Terrabyte'],[15, 'Petabyte']
]);

module.exports = (ugly, decimal, satuan = 'default') => {
  ugly = (num => {
    if (typeof num !== 'number') throw new Error('Masukan bukan angka')
    else return parseFloat(num)
  })(ugly)

  const digits = Math.floor(Math.log10(Math.abs(ugly))) + 1

  let suf = indonesia_meter;

  switch (satuan) {
    case 'uang': case 'duit':
      suf = indonesia_uang;
      break;
    case 'mg': case 'miligram':
      suf = indonesia_miligram;
      break;
    case 'g': case 'gram':
      suf = indonesia_gram;
      break;
    case 'mm': case 'milimeter':
      suf = indonesia_milimeter;
      break;
    case 'cm': case 'centimeter':
      suf = indonesia_centimeter;
      break;
    case 'harddisk': case 'storage': case 'penyimpanan': case 'hdd':
      suf = indonesia_hdd;
      break;
    case 'm': case 'meter': case 'meteran': case 'default': default:
      suf = indonesia_meter;
      break;
  }

  const units = ((num, zeroes) => {
    for (let z of suf.keys()) if (num > z) zeroes = z
    return { suffix: suf.get(zeroes), zeroes }
  })(digits, null)

  const pretty = ugly/Math.pow(10, units.zeroes)

  decimal = (pretty % 1 === 0) ? 2 : Math.max(1, (decimal + 1)) || 3

  if (-1000 < ugly && ugly < 1000) return ugly
  return `${parseFloat(pretty.toPrecision(decimal))}${units.suffix}`
}

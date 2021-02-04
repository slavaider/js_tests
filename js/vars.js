// Number
console.log('0xAB ->', 0xAB)
console.log('10e0 ->', 10e0)
console.log('10e1 ->', 10e1)
console.log('------')
// Nan
console.log('0 / 0 ->', 0 / 0)
console.log(`'hello' / 2 ->`, 'hello' / 2)
console.log(`'hello' * 2 ->`, 'hello' * 2)
console.log('------')
// Infinity
console.log('1/0 ->', 1 / 0)
console.log('-1/0 ->', -1 / 0)
console.log('------')
// Str
console.log(`\\' ->`, '\'')
// Unicode
console.log(`\\u03A9 ->`, '\u03A9')
// Latin
console.log(`\\xA9 ->`, '\xA9')
console.log('------')
// Boolean
console.log(`0 === -0 ->`, 0 === -0)
console.log(`1 < '1' ->`, 1 < '1')
console.log(`'a' > 'Abcd' ->`, 'a' > 'Abcd')
console.log('------')
// && ||
console.log(`10 && 20 ->`, 10 && 20)
console.log(`10-10 && 20 ->`, 10 - 10 && 20)
console.log(`10 || 20 ->`, 10 || 20)
console.log(`10-10 || 20 ->`, 10 - 10 || 20)
console.log('------')

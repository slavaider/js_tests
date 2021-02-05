const arr = [1, 2, '3', 55, 6]
arr['lol'] = 1
arr[10] = 1
console.log(`arr -> `, arr)
console.log(`1 in arr -> `, 1 in arr)
console.log(`Array.isArray(arr) -> `, Array.isArray(arr))
console.log(`arr.join(' ') -> `, arr.join(' '))
console.log(`arr.concat([5, 6, 7]) -> `, arr.concat([5, 6, 7]))
console.log(`arr.slice(0, 3) -> `, arr.slice(0, 3))
console.log(`arr -> `, arr)
arr.splice(0, 2, 3, 4)
console.log(`arr.splice(0, 2, 3, 4) -> `, arr)
console.log('length', arr.push(1))
arr.forEach((value, index, array) => array[index] = value * 2)
console.log(arr.every((v) => v <= 2))
console.log(arr.some((v) => v <= 2))
console.log([1, 2, 4].reduce((x, y) => x + y, 0))
for (let i in arr) {
    if(arr.hasOwnProperty(i)) {
        console.log(i)
    }
}

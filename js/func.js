const handler = () => {
    let a = 10
    let b = ++a // a+=1
    console.log(b)
    const c = ++a
    console.log(c)
}
const randomInterval = (max, min) => {
    // Math.random() * max [0;max]
    // Math.random() + min [min;min+1]
    return Math.random() * (max - min) + min
}
const switchTest = (a) => {
    switch (a) {
        case 1:
            return 1
        case 2:
            return 2
        default:
            return NaN
    }
}
const circles = () => {
    console.log('a')
    let a = 1
    do {
        console.log(a)
        a += 1
    } while (a < 5)
    console.log('b')
    let b = 1
    while (b < 5) {
        console.log(b)
        b += 1
    }
    console.log('c')
    for (let c = 1; c < 5; c++) {
        console.log(c)
    }
    console.log(Math.pow(2, 10))
    return 'Done'
}
let str = `<table style="border: 1px solid cyan;border-spacing: unset">`
for (let i = 1; i < 10; i++) {
    str += `<tr>`
    for (let j = 1; j < 10; j++) {
        str += `<td style="border: 1px solid cyan">${i * j}</td>`
    }
    str += `</tr>`
}
str += `</table>`
document.querySelector('.test').innerHTML += str;

(function (a, b) {
    console.log(a, b)
}(1, 2));

const factorial = (num) => {
    if (num <= 1) return 1
    return num * factorial(num - 1)
}
console.log(factorial(3))

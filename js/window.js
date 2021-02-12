const timer = window.setInterval(() => {
    console.log('TimeOut')
    clearInterval(timer)
}, 3000)

const test = document.querySelector('.test')


function popIn(x) {
    let op = (test.style.opacity) ? parseFloat(test.style.opacity) : 0
    if (op < x) {
        op += 0.05
        test.style.opacity = op
        setTimeout(() => {
            popIn(x)
        }, 100)
    }
}


function popOut(x) {
    let op = (test.style.opacity) ? parseFloat(test.style.opacity) : 1
    if (op > x) {
        op -= 0.05
        test.style.opacity = op
        setTimeout(() => {
            popOut(x)
        }, 100)
    } else {
        test.style.display = 'none'
    }
}

test.onclick = () => {
    popOut(0)
}
clearTimeout()

window.setTimeout(() => {
    test.style.display = 'block'
    popIn(1)
}, 1000)
setInterval(() => {
    if (test.style.color === 'black') {
        test.style.color = 'red'
    } else {
        test.style.color = 'black'
    }
}, 2000)

// console.log(confirm('p='))
// console.log(prompt('h='))

function handler() {
    const w1 = window.open(
        'test.html',
        'w1',
        'width=450,height=150,resizable=no,scrollbars=yes,menubar=no,toolbar=no,location=no'
    )
    console.log(w1.opener)
}

function getScroll() {
    return {
        x: window.pageXOffset,
        y: window.pageYOffset
    }
}

function drag(el, e) {
    const scroll = getScroll()
    const startX = e.clientX + scroll.x
    const startY = e.clientY + scroll.y
    const elX = el.offsetLeft
    const elY = el.offsetTop
    const deltaX = startX - elX
    const deltaY = startY - elY

    function mouseMove(e) {
        const scroll = getScroll()
        el.style.left = (e.clientX + scroll.x - deltaX) + 'px'
        el.style.top = (e.clientY + scroll.y - deltaY) + 'px'
        e.stopPropagation()
    }

    function mouseUp(e) {
        document.removeEventListener('mousemove', mouseMove, true)
        document.removeEventListener('mouseup', mouseUp, true)
        e.stopPropagation()
    }

    document.addEventListener('mousemove', mouseMove, true)
    document.addEventListener('mouseup', mouseUp, true)
    e.stopPropagation()
    e.preventDefault()

}

window.onload = () => {
    // const test = (value) => {
    //     console.log(value)
    // }
    // test.call(this, '123')

    const btn = document.querySelector('.btn-test')
    const logger = (e) => {
        console.log(e)
    }
    btn.addEventListener('click', logger)
    btn.addEventListener('mouseup', logger)
    btn.addEventListener('mousedown', logger)

    function handlerEmail(e) {
        if (!(e.charCode >= 97 && e.charCode <= 122)) {
            e.preventDefault()
        }
    }

    const email = document.forms[0].email
    email.addEventListener('keypress', handlerEmail)
}


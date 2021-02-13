const el = document.querySelector('#time')
const test = document.querySelectorAll('div')
const res = []
Object.keys(test).forEach((key) => {
    if (test[key].style[0]) {
        res.push(test[key])
    }
})
// console.log(res)
// console.log(document.images)
// console.log(document.links)
// console.log(el.getElementsByTagName('div'))
// console.log(el.children)
// console.log(el.lastElementChild)
console.log(el.getAttribute('id'))
el.setAttribute('class', 'lol')
console.log(el.getAttributeNames())
el.removeAttribute('class')
console.log(el.hasAttribute('class'))
document.forms[0].onsubmit = (e) => {
    e.preventDefault()
    console.log(e.target.email.value)
}

function handler() {
    const el = document.querySelector('#test2')
    // el.insertAdjacentHTML('beforeend', `<strong>beforeend</strong><br>`)
    // el.insertAdjacentHTML('beforebegin', `<strong>beforebegin</strong><br>`)
    // el.insertAdjacentHTML('afterbegin', `<strong>afterbegin</strong><br>`)
    // el.insertAdjacentHTML('afterend', `<strong>afterend</strong><br>`)
    const newNode = document.createElement('div')
    const TextNode = document.createTextNode('123')
    newNode.appendChild(TextNode)
    el.insertBefore(newNode, el.firstElementChild)

}

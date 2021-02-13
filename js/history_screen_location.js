function url_parse() {
    const args = {}
    const query = location.search.substring(1).split('&')
    const parts = query.map((el) => el.split('='))
    const res = [].concat(...parts)
    for (let i = 0; i < res.length; i += 2) {
        args[res[i]] = res[i + 1]
    }
    return args
}

function handler() {
    // location.assign('https://google.com')
    // location.replace('https://google.com')
    // location.reload()
    // location = 'https://google.com'

    // history.back()
    // history.forward()
    // history.go() // 1=forward; -1=back
}

console.log(screen)
console.log(navigator)


window.onload = function () {
    const str = 'Test'
    console.log(`str  ->`, str)
    console.log(`str[0]  ->`, str[0])
    console.log(`str.charAt(0)  ->`, str.charAt(0))
    console.log(`str.charCodeAt(0)  ->`, str.charCodeAt(0))
    console.log(`str.concat(' Object', '!')  ->`, str.concat(' Object', '!'))
    console.log(`String.fromCharCode(64,25)  ->`, String.fromCharCode(64, 25))
    console.log(`String.fromCharCode(str.charCodeAt(0))  ->`, String.fromCharCode(str.charCodeAt(0)))
    console.log(`str.indexOf('T')  ->`, str.indexOf('T'))
    console.log(`str.indexOf('a')  ->`, str.indexOf('a'))
    console.log(`str.lastIndexOf('a')  ->`, str.lastIndexOf('t'))
    const strings = ['Hello', 'World', '!!!']
    console.log(strings.sort((a, b) => {
        return a.localeCompare(b)
    }))
    const a = 5
    console.log(a.toString())
}

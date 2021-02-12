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
    const strings = ['Hello1', 'World2', '!!!3']
    console.log(strings.sort((a, b) => {
        return a.localeCompare(b)
    }))
    const result = strings.join(' ')
    // Regex
    const match = result.match(/\d+/g)
    console.log(match)
    const replace = result.replace(/\d+/g, '[Found]')
    console.log(replace)
    const index = result.search(/\d+/)
    console.log(result, index, result[index])
    // Split Str
    console.log(`result.slice(0,3) -> `, result.slice(0, 3))
    console.log(`result.substr(0,3) -> `, result.substr(0, 3))
    console.log(`result.substring(0,3) -> `, result.substring(0, 3))
    console.log(result.toLocaleLowerCase())
    console.log(result.toLowerCase())
}

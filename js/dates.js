console.log(new Date(Date.now() + 60 * 60 * 1000))
const date = new Date()
console.log(new Date(date.setHours(new Date().getHours() + 1)))
console.log(new Date(0))
console.log(new Date("02 01 2000"))
console.log(new Date(2000, 2, 1))
console.log(date.getTimezoneOffset())
// Formatting
console.log('---------')
console.log(`toString -> `, date.toString())
console.log(`toUTCString -> `, date.toUTCString())
console.log(`toISOString -> `, date.toISOString())
console.log(`toDateString -> `, date.toDateString())
console.log(`toTimeString -> `, date.toTimeString())
console.log(`toLocaleString -> `, date.toLocaleString())
console.log(`toLocaleDateString -> `, date.toLocaleDateString())
console.log(`toLocaleTimeString -> `, date.toLocaleTimeString())
console.log(`toJSON -> `, date.toJSON())
const displayTime = () => {
    setInterval(() => {
        const date = new Date()
        const toDate = new Date(2022,0,1)
        const timer = toDate.getTime() - date.getTime()
        const days = Math.floor(timer / (24 * 60 * 60 * 1000))
        const hours = Math.floor((timer / (60 * 60 * 1000)) % 24)
        const minutes = Math.floor((timer / (60 * 1000)) % 60)
        const seconds = Math.floor((timer / (1000)) % 60)
        document.getElementById('time').textContent = `
        Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}
        `
    }, 1000)
}
window.onload = displayTime

const a = {
    one: 1
}
console.log(a.one)
const temp = {} // Object.prototype
const temp2 = Object.create(a) // inherit object
const temp3 = Object.create(Object.prototype)
console.log(temp2.one)
console.log(temp3)
const obj = {
    value1: 10,
    value2: 20,
    get sum() {
        return this.value1 + this.value2;
    },
    set sum(value) {
        this.value1 = value
    }
}
console.log(obj.sum)
obj.sum = 30;
console.log(obj.sum)
Object.defineProperty(obj, 'value3', {
    value: 100,
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(obj)

function ObjConstruct(key, value) {
    this.key = key
    this.value = value
}
function test(){
    console.log(this)
}
console.log(new ObjConstruct('lol', 2))
test()

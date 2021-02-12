const arr = [1,2,34,5,6]

for(let i of arr){
    console.log(i)
}
for(let i in arr){
    console.log(i)
}
console.log('Fib')
let fib = {
    [Symbol.iterator](){
        let pre = 0, cur = 1
        return{
            next(){
                [pre,cur] = [cur,pre+cur]
                return {value:cur,done:false}
            }
        }
    }
}

for( let n of fib){
    if(n>1500)break
    console.log(n)
}
console.log('123'.toArray())

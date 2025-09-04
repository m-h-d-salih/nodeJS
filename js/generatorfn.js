function* generator(){
    yield 1
    yield 2
    yield 4
}
const callgen=generator()
console.log(callgen.next())
console.log(callgen.next()) 
console.log(callgen.next()) 
console.log(callgen.next()) 
console.log(callgen.next()) 
console.log(callgen.next()) 
console.log(callgen.next()) 
console.log(callgen.next()) 
console.log(callgen.next()) 
console.log(callgen.next()) 




//call
function greet(greeting){
    console.log(`${greeting} ${this.name}`)
}

const person={name:'salih'}

greet.call(person,"hello");

//apply

greet.apply(person,['hii'])

//bind
const binded=greet.bind(person,'hoi')
binded()
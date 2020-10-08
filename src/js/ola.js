const oi = document.querySelector('#content')
function muda() {
    return (
        oi.textContent = 'Ola mundo'
    )
}

// const user = {FullName: {Name: '', SurName: ''}, BirthDay: {}, senha: ''}

//<Builting a simple function> aquire and return
function messageMe() {
    console.log(`How's good, body?`)
}
messageMe()

function soma(n1, n2) {
    console.log(n1 + n2)
}
soma(78, 45)

//Object with functions and variable
//Functions passed by params (preconceived variable) by referencs.
function meme(name, age, cel) {
    let b = {
        name,
        age,
        cel,
    }
    return b
}
let owner = meme('Julino Segunda Dídimo', '28 years old', '19984192872')
let ner = meme("Julio Macuva")

console.log(owner)
// console.log(ner.name)

//function by constructor

function Mimik(name, investor, owner, email) {
    this.name = name
    this.investor = investor
    this.owner = owner
    this.email = email

}
let r = new Mimik('VemVerWork', 'Julino', 'Dídimo', 'vemverwork@gmail.com')
console.log(r)
//Printing with a function, note that we add a this variable calling "profile"witch is our method, and we insert other propertys inner of the function in it, then we return those propertys one time with the "profile" variable.
function Mimik1(name, investor, owner, email) {
    this.name = name
    this.investor = investor
    this.owner = owner
    this.email = email

    this.profile = function(){
        return (`O nome de sua empresa é ${this.name}, tem os seguintes investidores ${this.investor}, o proprietário é ${this.owner}, o email dele é ${this.email}`)
    }
}
let s = new Mimik1('VemVerWork', 'Julino', 'Dídimo', 'vemverwork@gmail.com')
console.log(s.profile())


//Classes functions
class Milk {
    constructor(name, investor, owner, email) {
        this.name = name
        this.investor = investor
        this.owner = owner
        this.email = email
    }
    profile(){
        return (`O nome de sua empresa é ${this.name}, tem os seguintes investidores ${this.investor}, o proprietário é ${this.owner}, o email dele é ${this.email}`)
    } 
}
let t = new Milk('VemVerWork', 'Julino', 'DÍDIMO', 'vemverwork@gmail.com')
console.log(t.profile())
//With functions we can declare first our variable, then built the function and it we'll work perfectilly, but in classes and constructor, we need first to create de function, then call our variable.
//We can built our Objects with, functions, Variable, and Classes, a good way to built a function with variable: let me = { H: '1.80m', name: 'Julino Segunda Dídimo', age: '28 years olds' } console.log(me.name) > Julino Segunda Dídimo.

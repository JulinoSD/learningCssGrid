function Mesmo(couple, date, kiss) {
    let c = {
        couple,
        date,
        kiss
    }
    return c
}
let u = Mesmo('Juq', 'Mai20', 'Mouth')
console.log(u)

class Pessoa {
    constructor(first, second, last) {
        this.first = first
        this.second = second
        this.last = last

    }
    fullName() {
        return (`O teu nome completo é ${this.first} ${this.second} ${this.last}`)
    }
}

let c = new Pessoa('Julino', 'Segunda', 'Dídimo')

console.log(c.fullName())

function Colors(firstColor, secondColor, thirstColor) {
    a = {
        firstColor,
        secondColor,
        thirstColor
    }
    return a
}

console.log(Colors('Vermelho', 'Amarelo', 'Branco'))
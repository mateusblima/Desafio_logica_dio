class heroi{
    constructor(nome, idade, tipo, arma){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.arma = arma
    }

    ataque(){
        console.log(`o ${this.tipo} atacou usando ${this.arma}`)
    }
}


let guerreiro = new heroi("javinha", 20, "guerreiro", "espada")
let mago = new heroi("javinha", 200, "mago", "magia")
let monge = new heroi("javinha", 20, "monge", "artes marciais")
let ninja = new heroi("javinha", 20, "ninja", "shuriken") 

guerreiro.ataque()
mago.ataque()
monge.ataque()
ninja.ataque()

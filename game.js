const promptSync = require('prompt-sync')
const prompt = promptSync()
let comando

// TODO Carregar um save
let vida = 10
let espada = 10
let porta = true // true = aberto
let trapdoor = true
let repetidor = 0

function status() {
    console.log('Vida:', vida)
    // TODO Corrigir os textos para apresentar ao usuário
    console.log(espada)
    console.log(porta)
    console.log(trapdoor)
    console.log(repetidor)
}

status()

function comandos() {
    //TODO mostrar comando quando pedido
    console.log('Interagir com a porta (p)')
    console.log('Interagir com a trapdoor (t)')
    console.log('Bater num monstro (a)') 
    console.log('Tomar um hit (l)')
    console.log('Comer (c)')
    console.log('Repetidor (r)')
    console.log('Sair (ç)') // TODO salvar o estado do jogo
}

while (comando != 'ç') {
comandos()
comando = prompt("O que você deseja fazer? ");
console.log('==================================================')


if (comando == 'p') {
    if(porta == true){
        porta = false
    } else {
        porta = true
    }
}
if (comando == 't') {
    if(trapdoor == true){
        trapdoor = false
    } else {
        trapdoor = true
    }
}

if (comando == 'a') { // TODO espada tem que acabar
    espada = espada - 1
}

if (comando == 'l') { // TODO avisar morte
    vida = vida - 1
}

if (comando == 'c') { // TODO não pode passar de 10 de vida
    vida = vida + 1
}

if (comando == 'r') {
    repetidor = repetidor + 1 // TODO repetidor máximo 3 cargas
}


status()

}
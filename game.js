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
    // TODO Aleatorizar se um zumbi aparece
    // TODO Aleatorizar se o zumbi dá um hit (miss)
    // TODO Aleatorizar se você consegue dar um hit (miss). QUanto maior o treino, menos miss e mais dano
    //TODO mostrar comando quando pedido
    console.log('Interagir com a porta (p)')
    console.log('Interagir com a trapdoor (t)')
    console.log('Bater num zumbi (a)')
    console.log('Arrumar a espada (h)') 
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

if (comando == 'a') {
    if (espada == 0) {
        console.log('Sua espada quebrou')
    } else {
        espada = espada - 1
    }
}

if (comando == 'h') {
    if (espada == 10) {
        console.log('Sua espada está arrumada')
    } else if (espada == 9) {
        console.log('Sua espada não pode ser arrumada')
    } else {    
    espada = espada + 2
    }
}

if (comando == 'l') { // TODO avisar morte
    vida = vida - 1
}

if (comando == 'c') {
    if(vida == 10) {
        console.log('Vida cheia')
    } else {
        vida = vida + 1
    }
}

if (comando == 'r') {
    repetidor = repetidor + 1 // TODO repetidor máximo 3 cargas
}


status()

}
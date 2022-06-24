const promptSync = require('prompt-sync')
const prompt = promptSync()

const comandos = require ('./comandos')
const porta = require ('./porta')
const vida = require ('./vida')

let comando

let espada = 10
let trapdoor = true
let repetidor = 0

function status() {
    console.log('Vida:', vida.getVida())
    // TODO Corrigir os textos para apresentar ao usuário
    console.log(espada)
    console.log(porta.getPorta())
    console.log(trapdoor)
    console.log(repetidor)
}

status()



while (comando != 'ç') {
comandos.comandos()
comando = prompt("O que você deseja fazer? ");
console.log('==================================================')

comandos.selecionaComando(comando)

status()

}
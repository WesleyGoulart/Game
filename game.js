const promptSync = require('prompt-sync')
const prompt = promptSync()

const comandos = require ('./comandos')
const porta = require ('./porta')
const vida = require ('./vida')
const trapdoor = require ('./trapdoor')
const espada = require ('./espada')

let comando


let repetidor = 0

function status() {
    console.log('Vida:', vida.getVida())
    // TODO Corrigir os textos para apresentar ao usuário
    console.log('Durabilidade da Espada:', espada.getEspada())
    console.log('A porta está', porta.getPorta())
    console.log('A trapdoor está', trapdoor.getTrapdoor())
}

status()



while (comando != 'ç') {
comandos.comandos()
comando = prompt("O que você deseja fazer? ");
console.log('==================================================')

comandos.selecionaComando(comando)

status()

}
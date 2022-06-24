const promptSync = require('prompt-sync')
const prompt = promptSync()
const fs = require('fs');
const inventario = require('./inventario')

const comandos = require ('./comandos')
const porta = require ('./porta')
const vida = require ('./vida')
const trapdoor = require ('./trapdoor')
const espada = require ('./espada')

let comando


function status() {
    console.log('Vida:', vida.getVida())
    // TODO Corrigir os textos para apresentar ao usuário
    console.log('Durabilidade da Espada:', espada.getEspada())
    console.log('A porta está', porta.getPorta())
    console.log('A trapdoor está', trapdoor.getTrapdoor())

    const saveInfo = {
        vida: vida.getVida(),
        durabilidade_espada: espada.getEspada(),
        porta: porta.getPorta(),
        trapdoor: trapdoor.getTrapdoor(),
        inventario: inventario.getInventario()
    }
    return saveInfo

}

status()



while (comando != 'ç') {
comandos.comandos()
comando = prompt("O que você deseja fazer? ");
console.log('==================================================')

comandos.selecionaComando(comando)

status() //TODO arrumar o status ao sair

}


const data = status();
const myJSON = JSON.stringify(data, null, 4);
console.log(myJSON)
fs.writeFileSync('save.json', myJSON);

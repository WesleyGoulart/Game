const promptSync = require('prompt-sync')
const prompt = promptSync()
const fs = require('fs');
const inventario = require('./inventario')
const save = require('./save.json')

const comandos = require ('./comandos')
const vida = require ('./vida')
const espada = require ('./espada')

let comando

vida.vidaInicial(save.vida)


function status() {
    console.log('Vida:', vida.getVida())
    console.log('Durabilidade da Espada:', espada.getEspada())


    const saveInfo = {
        vida: vida.getVida(),
        durabilidade_espada: espada.getEspada(),
        inventario: inventario.getInventario()
    }
    return saveInfo

}

status()



while (comando != '*') {
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
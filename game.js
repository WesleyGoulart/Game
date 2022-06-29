const promptSync = require('prompt-sync')
const prompt = promptSync()
const fs = require('fs');
const inventario = require('./inventario')
const save = require('./save.json')

const comandos = require ('./comandos')
const vida = require ('./vida')
const espada = require ('./espada')
const opcoes = require ('./opcoes')

let comando

vida.vidaInicial(save.vida)


function status(imprimir) {
    if (status == true) {
        console.log('Vida:', vida.getVida())
        console.log('Durabilidade da Espada:', espada.getEspada())
    }

    const saveInfo = {
        vida: vida.getVida(),
        durabilidade_espada: espada.getEspada(),
        inventario: inventario.getInventario(false)
    }
    return saveInfo

}

status(true)



while (comando != '*') {
    if (comando != 'm' && comando != '*') {
        comandos.comandos()
    }
    comando = prompt("O que você deseja fazer? ");
    console.log('==================================================')
    
    comandos.selecionaComando(comando)

    if (comando != '*'){
        status(true)
    }

       
}


if (comando == '*'){
    console.log('FIM!')
}

// A partir daqui são informações para guardar o save
const data = status(false);
const myJSON = JSON.stringify(data, null, 4);
fs.writeFileSync('save.json', myJSON);
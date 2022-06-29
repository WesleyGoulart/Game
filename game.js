const promptSync = require('prompt-sync')
const prompt = promptSync()
const fs = require('fs');
const inventario = require('./inventario')
const save = require('./save.json')

const comandos = require ('./comandos')
const vida = require ('./vida')
const espada = require ('./espada')
const opcoes = require ('./opcoes')
const andar = require ('./andar')
const combate = require ('./combate');
const status = require ('./status')

let comando
let modoJogo = 'caminhando'

vida.vidaInicial(save.vida)


status.status(true)

while (comando != '*') {
    if (comando != 'm' && comando != '*') {
        if (modoJogo == 'caminhando') {
            comandos.comandos()
        }
    }
    comando = prompt("O que você deseja fazer? ");
    console.log('==================================================')
    
    modoJogo = comandos.selecionaComando(comando)
    if (modoJogo == 'caminhando') {

        if (comando != '*' && comando != 'm'){
            status.status(true)
        }
    }

        if (modoJogo == 'combate') {
            status.status(true)
            combate.getCombate ()
            comandos.comandos ()
            comando = prompt("O que você deseja fazer? ")
            combate.atacarCombate(comando)
        }

}

if (comando == '*'){
    console.log('FIM!')
}

// A partir daqui são informações para guardar o save
const data = status.status(false);
const myJSON = JSON.stringify(data, null, 4);
fs.writeFileSync('save.json', myJSON);
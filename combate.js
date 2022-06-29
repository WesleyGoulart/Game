const promptSync = require('prompt-sync')
const prompt = promptSync()

const espada = require ('./espada')
const sorteios = require ('./sorteios')
const zumbi = require ('./zumbi')
const status = require ('./status')
const game = require ('./game')
const vida = require ('./vida')


function getCombate () {
    zumbi.setVidaTotal (10)
    while (zumbi.vidaTotalZumbi () > 0){ 
        status.status()
        console.log('Atacar (a)')
        console.log('Comer (c)')
        console.log('Arrumar a Espada (h)')
        console.log('Tentar fugir (f)')
        comando = prompt("[Combate] O que você deseja fazer? ")
        atacarCombate (comando)

    }
}

function atacarCombate (comando) {
        if (comando == 'a') {
            console.log('=========================================')
            console.log ('Você bateu no zumbi')
            zumbi.danoZumbi ()
            espada.quebraEspada ()
            if (sorteios.getRandom() < 0.5) {
                console.log ('Você apanhou!')
                vida.tomaDano ()
            }
            status.status (true)
            console.log('==========================================')
        }
}


module.exports = {
    getCombate,
    atacarCombate
}
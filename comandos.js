const espada = require('./espada')
const vida = require('./vida')
const inventario = require('./inventario')
const sorteios = require('./sorteios')
const opcoes = require ('./opcoes')
const combate = require('./combate')
const andar = require ('./andar')
const game = require ('./game')

function selecionaComando(comando) {


    if (comando == 'z') {
        andar.getAndar()
    }

    if (comando == 'h') {
        espada.arrumaEspada()
    }

    if (comando == 'c') {
        vida.come()    
    }

    if (comando == 'i') {
        inventario.getInventario(true)
    }

    if (comando == 'm') {
        opcoes.getOpcoes()
    }

    if (comando == '.') {
        espada.resetEspada()
        vida.resetVida()
        inventario.resetInventario()
    }
    
    if (sorteios.getRandom() < 0.5) {
        console.log('Você encontrou um zumbi!')
        return 'combate'
    }

return 'caminhando'

}

function comandos() {
    console.log('Andar (z)')
    console.log('Inventário (i)')
    console.log('Arrumar a espada (h)') 
    console.log('Tomar um hit (l)')
    console.log('Comer (c)')
    console.log('Repetidor (r)')
    console.log('Opcoes (m)')
}

module.exports = {
    selecionaComando,
    comandos
}

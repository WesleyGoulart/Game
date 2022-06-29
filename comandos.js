const espada = require('./espada')
const vida = require('./vida')
const inventario = require('./inventario')
const sorteios = require('./sorteios')


function selecionaComando(comando) {

    if (comando == 'a') {
        espada.quebraEspada()
    }

    if (comando == 'h') {
        espada.arrumaEspada()
    }

    if (comando == 'l') {
        vida.tomaDano()
    }

    if (comando == 'c') {
        vida.come()    
    }

    if (comando == 'i') {
        inventario.getInventario()
    }
    
    if(sorteios.getRandom() < 0.1) {
        vida.tomaDano()
        console.log('Você apanhou!')
    }

}

function comandos() {
    console.log('Inventário (i)')
    console.log('Bater num zumbi (a)')
    console.log('Arrumar a espada (h)') 
    console.log('Tomar um hit (l)')
    console.log('Comer (c)')
    console.log('Repetidor (r)')
    console.log('Sair (*)')
}

module.exports = {
    selecionaComando,
    comandos
}

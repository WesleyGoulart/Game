const espada = require('./espada')
const porta = require('./porta')
const trapdoor = require('./trapdoor')
const vida = require('./vida')
const inventario = require('./inventario')


function selecionaComando(comando) {

    if (comando == 'p') {
        porta.abreFechaPorta()
    }

    if (comando == 't') {
        trapdoor.abreFechaTrapdoor()
    }

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

}

function comandos() {
    console.log('Interagir com a porta (p)')
    console.log('Interagir com a trapdoor (t)')
    console.log('Inventário (i)')
    console.log('Bater num zumbi (a)')
    console.log('Arrumar a espada (h)') 
    console.log('Tomar um hit (l)')
    console.log('Comer (c)')
    console.log('Repetidor (r)')
    console.log('Sair (ç)')
}

module.exports = {
    selecionaComando,
    comandos
}

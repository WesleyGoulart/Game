const porta = require('./porta')
const vida = require('./vida')

function selecionaComando(comando) {

    if (comando == 'p') {
        porta.abreFechaPorta()
    }
    if (comando == 't') {
        if(trapdoor == true){
            trapdoor = false
        } else {
            trapdoor = true
        }
    }

    if (comando == 'a') {
        if (espada == 0) {
            console.log('Sua espada quebrou')
        } else {
            espada = espada - 1
        }
    }

    if (comando == 'h') {
        if (espada == 10) {
            console.log('Sua espada está arrumada')
        } else if (espada == 9) {
            console.log('Sua espada não pode ser arrumada')
        } else {    
        espada = espada + 2
        }
    }

    if (comando == 'l') {
        vida.tomaDano()
    }

    if (comando == 'c') {
        vida.come()    
    }

    if (comando == 'r') {
        repetidor = repetidor + 1 // TODO repetidor máximo 3 cargas
    }
}

function comandos() {
    console.log('Interagir com a porta (p)')
    console.log('Interagir com a trapdoor (t)')
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


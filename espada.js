const inventario = require('./inventario')

let espada = 10


function quebraEspada() {
    if (espada == 0) {
        console.log('Sua espada quebrou')
    } else {
        espada = espada - 1
    }
}

function arrumaEspada() {
    if (espada == 10) {
        console.log('Sua espada está arrumada')
    } else if (espada == 9) {
        console.log('Sua espada não pode ser arrumada')
    } else {    
        if (inventario.tiraFerro() == true) {
            espada = espada + 2
        }
    }
}

function getEspada(){
    return espada
}

function resetEspada(){
    espada = 10 
}

module.exports = {
    quebraEspada,
    arrumaEspada,
    getEspada,
    resetEspada
}
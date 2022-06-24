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
    espada = espada + 2
    }
}

function getEspada(){
    return espada
}

module.exports = {
    quebraEspada,
    arrumaEspada,
    getEspada
}

const sorteios = require('./sorteios')
const inventario = require('./inventario')

let vidaTotal = 10

function danoZumbi () {
    if (vidaTotal == 0) { 
        throw new Error ('Zumbi já morreu.')
    } else {
        vidaTotal = vidaTotal - 10
        if (vidaTotal == 0) {
            console.log('Zumbi morreu')
                if (sorteios.getRandom ()) {
                    inventario.ganhaComida ()
                    inventario.ganhaFerro ()
                }          
        } else { 
             console.log('O zumbi agora tem', vidaTotal, 'de vida')
        }
    }
}

function vidaTotalZumbi () {
    return vidaTotal
}

function setVidaTotal (valor) {
    vidaTotal = valor 
}


module.exports = {
    danoZumbi,
    vidaTotalZumbi,
    setVidaTotal
}
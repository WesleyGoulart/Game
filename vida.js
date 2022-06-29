const inventario = require ('./inventario')


let vida = 10

function vidaInicial(vidaSalva){
    vida = vidaSalva
}

function tomaDano() {
    if (vida > 0) {
        vida = vida - 1
    } 
    if (vida == 0) {
        console.log("Você morreu!")
    }
}

function come() {
    if(vida == 10) {
        console.log('Vida cheia')
    } else {
        const podeComer = inventario.tiraComida()
        if (podeComer == true) {
            vida = vida + 1
        }
    }
}

function getVida() {
    return vida
}

function resetVida() {
    vida = 10
}

module.exports = {
    tomaDano,
    come,
    getVida,
    vidaInicial,
    resetVida
}
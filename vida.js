let vida = 10

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
        vida = vida + 1
    }
}
function getVida(){
    return vida
}

module.exports = {
    tomaDano,
    come,
    getVida
}
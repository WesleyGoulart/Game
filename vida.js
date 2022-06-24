let vida = 10

function tomaDano() {
    vida = vida - 1
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
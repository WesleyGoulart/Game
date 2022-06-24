let trapdoor = true // true = aberto

function abreFechaTrapdoor () {
    if(trapdoor == true){
        trapdoor = false
    } else {
        trapdoor = true
    }
}

function getTrapdoor(){
    if (trapdoor == true) {
        return 'Aberta'
    }
    return 'Fechada'
}

module.exports = {
    abreFechaTrapdoor,
    getTrapdoor
}
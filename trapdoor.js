let trapdoor = true // true = aberto

function abreFechaTrapdoor () {
    if(trapdoor == true){
        trapdoor = false
    } else {
        trapdoor = true
    }
}

function getTrapdoor(){
    return trapdoor
}

module.exports = {
    abreFechaTrapdoor,
    getTrapdoor
}
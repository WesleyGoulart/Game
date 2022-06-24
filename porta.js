let porta = true // true = aberto

function abreFechaPorta () {
    if(porta == true){
        porta = false
    } else {
        porta = true
    }
}

function getPorta(){
    return porta
}

module.exports = {
    abreFechaPorta,
    getPorta
}
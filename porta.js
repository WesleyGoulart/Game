let porta = true // true = aberto

function abreFechaPorta () {
    if(porta == true){
        porta = false
    } else {
        porta = true
    }
}

function getPorta(){
    if (porta == true) {
        return 'Aberta'
    }
    return 'Fechada'

}

module.exports = {
    abreFechaPorta,
    getPorta
}
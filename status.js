const vida = require ('./vida')
const espada = require ('./espada')
const inventario = require ('./inventario')


function status(imprimir) {
    if (imprimir == true) {
        console.log('Sua vida:', vida.getVida())
        console.log('Durabilidade da Espada:', espada.getEspada())
    }

    const saveInfo = {
        vida: vida.getVida(),
        durabilidade_espada: espada.getEspada(),
        inventario: inventario.getInventario(false)
    }
    return saveInfo

}

module.exports = {
    status
}
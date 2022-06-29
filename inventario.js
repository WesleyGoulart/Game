const inventario = {
    comida: 2,
    sucata: 0,
    ferro: 2,
    madeira: 0
}

function getInventario (imprimir) {
    if (imprimir == true) {
        console.log(inventario)
    }    
    
    return inventario
    
}

function tiraComida () {
    if (inventario.comida == 0) {
        console.log('Você não tem comida!')
        return false
    } else {
        inventario.comida = inventario.comida - 1
        return true
    }
}

function tiraFerro () {
    if (inventario.ferro == 0) {
        console.log('Você não tem ferro!')
        return false
    } else {
        inventario.ferro = inventario.ferro - 1
        return true
    }
}

function resetInventario(){
    inventario.comida = 2
    inventario.sucata = 0
    inventario.ferro = 2
    inventario.madeira = 0
}

module.exports = {
    getInventario,
    tiraComida,
    tiraFerro,
    resetInventario
}




/*
inventario.comida = 10

inventario.ferro = inventario.ferro + 1
inventario.ferro = inventario.ferro + 1

inventario.agua = 30

delete inventario.comida


console.log(inventario)


{
    ferro: 2,
    agua: 30,
    sucata: 0,
    madeira: 0
}


*/






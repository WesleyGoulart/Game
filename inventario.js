const sorteios = require ('./sorteios')


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

function ganhaComida () {
    
    let sorteioDrop = Math.floor(sorteios.getRandom () * 100)
    let ganhoComida

    if (sorteioDrop <= 59 ) {
        ganhoComida = 1
    }
    
    if ( 60 <= sorteioDrop && sorteioDrop <= 89) {
        ganhoComida = 2
    }
    
    if (90 <= sorteioDrop && sorteioDrop <= 100) {
        ganhoComida = 3
    }

    inventario.comida = inventario.comida + ganhoComida
    
    
    console.log ('Você ganhou', ganhoComida, 'comida(s).' )
}


function ganhaFerro () {
    
    let sorteioDrop = Math.floor(sorteios.getRandom () * 100)
    let ganhoFerro

    

    if (sorteioDrop <= 59 ) {
        ganhoFerro = 1
    }
    
    if ( 60 <= sorteioDrop && sorteioDrop <= 89) {
        ganhoFerro = 2
    }
    
    if (90 <= sorteioDrop && sorteioDrop <= 100) {
        ganhoFerro = 3
    }
    
    inventario.ferro = inventario.ferro + ganhoFerro
    
    console.log ('Você ganhou', ganhoFerro, 'ferro(s).' )

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
    resetInventario,
    ganhaComida,
    ganhaFerro
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






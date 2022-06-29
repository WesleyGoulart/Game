
let vidaTotal = 10

function danoZumbi () {
    if (vidaTotal == 0) { 
        throw new Error ('Zumbi já morreu.')
    } else {
        vidaTotal = vidaTotal - 2
        if (vidaTotal == 0) {
            console.log('Zumbi morreu')          
        } else { 
             console.log('O zumbi agora tem', vidaTotal, 'de vida')
        }
    }
}

function vidaTotalZumbi () {
    return vidaTotal
}


module.exports = {
    danoZumbi,
    vidaTotalZumbi
}
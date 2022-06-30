const sorteios = require("./sorteios")

const N = 20
const M = 20
let posicaoColuna = sorteios.randomIntFromInterval(0, M - 1)
let posicaoLinha = sorteios.randomIntFromInterval(0, N - 1)



function imprimeMapa () {
    let coluna = 0
    let linha = 0
    let retangulo = ''
    while(linha < N){
        while(coluna < M){
            if(posicaoColuna == coluna && posicaoLinha == linha) {
                retangulo = retangulo + 'x '
            } else {
            retangulo = retangulo + '. '
            }
            coluna = coluna + 1
        }
        retangulo = retangulo + '\n'
        linha = linha + 1
        coluna = 0
    }

    console.log(retangulo)
}

function mover(direcao) {
    if(direcao == 'cima') {
        cima()
    }
    if(direcao == 'baixo') {
        baixo()
    }
    if(direcao == 'direita'){
        direita()
    }
    if(direcao == 'esquerda'){
        esquerda()
    }
}

function cima() {
    posicaoLinha = posicaoLinha - 1
        if(posicaoLinha < 0){
            posicaoLinha = 0
            console.log('Você não consegue se mover para essa direção.')
        }
}

function baixo() {
    posicaoLinha = posicaoLinha + 1
        if(posicaoLinha >= N){
            posicaoLinha = N - 1
            console.log('Você não consegue se mover para essa direção.')
        }
}

function direita() {
    posicaoColuna = posicaoColuna + 1
        if(posicaoColuna >= M){
            posicaoColuna = M - 1
            console.log('Você não consegue se mover para essa direção.')
        }
}

function esquerda() {
    posicaoColuna = posicaoColuna - 1
        if(posicaoColuna < 0){
            posicaoColuna = 0
            console.log('Você não consegue se mover para essa direção.')
        }
}




imprimeMapa()







let rank = somaVitoria(99, 1)
let elo = elorank (rank)

function somaVitoria(vit, der){
    return vit - der 
}

function elorank(elo){
    if (elo < 10) {
        return "Ferro"
    }else if (elo > 10 && elo <= 20){
        return "Bronze"
    }else if (elo > 20 && elo <=50 ){
        return "Prata"
    }else if (elo > 50 && elo <= 80){
        return "Ouro"
    }else if (elo > 80 && elo <= 90){
        return "Diamante"
    }else if (elo > 90 && elo <= 100){
        return "Lendário"
    }else return "imortal"
}

if (rank  < 0){
    rank = 0
    console.log("O Herói tem de saldo de " + rank + " vitórias, está no nível de " + elo)
}else{
    console.log("O Herói tem de saldo de " + rank + " vitórias, está no nível de " + elo)
}
let nome_heroi = "javinha scriptado"
let xp = 8711
rank = ""


switch (true) {
    case xp < 1000:
        rank = "Ferro"
        console.log("O héroi de nome: " + nome_heroi + " está no nível de: " + rank)
        break;

    case xp > 1000 && xp <= 2000:
        rank = "Bronze"
        console.log("O héroi de nome: " + nome_heroi + " está no nível de: " + rank)
        break;

    case xp > 2000 && xp <= 5000:
        rank = "Prata"
        console.log("O héroi de nome: " + nome_heroi + " está no nível de: " + rank)
        break;

    case xp > 5000 && xp <= 7000:
        rank = "Ouro"
        console.log("O héroi de nome: " + nome_heroi + " está no nível de: " + rank)
        break;

    case xp > 7000 && xp <= 8000:
        rank = "Platina"
        console.log("O héroi de nome: " + nome_heroi + " está no nível de: " + rank)
        break;

    case xp > 8000 && xp <= 9000:
        rank = "Ascendente"
        console.log("O héroi de nome: " + nome_heroi + " está no nível de: " + rank)
        break;

    case xp > 9000 && xp <= 10000:
        rank = "Imortal"
        console.log("O héroi de nome: " + nome_heroi + " está no nível de: " + rank)
        break; 

    default:
        rank = "Radiante"
        console.log("O héroi de nome: " + nome_heroi + " está no nível de: " + rank)
        break;
}
function sorteia(n) {
    return Math.round(Math.random() * n) +1 //adicianar o número 100
}

let numeroPensado = sorteia(100);

const numeroTotalTentativas = 10;
let numeroTentativas = 0;

//alert("Você é bom em adivinhação?")

while(numeroTentativas < numeroTotalTentativas) {

    let chute = parseInt(prompt("Qual número você acha que estou pensando?"));

    if(chute == numeroPensado) {
        alert("Uau! Você acertou em " + numeroTentativas+ ", pois eu pensei no " + numeroPensado+ ".");
        break;
    } else if(numeroTentativas == numeroTotalTentativas) {
        alert("Parece que você não é bom em adivinhação como pensava! O número era " + numeroPensado + ".");
    } else if(chute > numeroPensado) {
            alert("Você errou! Seu chute é maior que o número pensado!");
    } else {
            alert("Você errou! Seu chute é menor que o número pensado!");
    }
}

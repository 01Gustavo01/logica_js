alert('Boas Vindas ao jogo do número secreto');
let numeroSecreto = 7;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');


while (numeroSecreto != chute) {
    chute = prompt("Digite um número:"); // Solicita um novo chute

    if (numeroSecreto == chute) {
        alert(`Isso aí, você descobriu o número secreto: ${numeroSecreto}`);
    } else {
        alert(`Você errou, não é o número ${chute}`);
    }
}

// Explicação da diferença entre concatenação de strings e template literals:
/*
Aqui nós temos dois exemplos de criação de strings em JavaScript:

1. Concatenação de strings com o operador '+':
   alert('O número secreto era ' + numeroSecreto + ', mas você escolheu ' + chute);
   Neste exemplo, estamos concatenando as strings usando o operador '+'. Isso requer a utilização de múltiplos operadores '+', o que pode tornar o código menos legível, especialmente com várias variáveis.

2. Template literals com crases (`):
   alert(`O número secreto era ${numeroSecreto}, mas você escolheu ${chute}`);
   Aqui, estamos usando template literals para criar a string. Isso nos permite incluir variáveis dentro da string de forma mais limpa e legível, usando '${...}' para interpolação. Isso torna o código mais fácil de entender e modificar.
*/

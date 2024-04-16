/**
 * 1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?
 * 
 */

const somarIndice = (INDICE) => {
    let soma = 0, k = 0;

    while (k < INDICE) {
        k = k + 1
        soma = soma + k;
    }
    return soma;
}

console.log(somarIndice(13));

// Resultado dará 91.
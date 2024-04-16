/** 
 * 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
 * 
 * 
 */

const isFibonacci = (num) => {
    // os 2 primeiros números da sequencia de fibonacci
    let a = 0;
    let b = 1;

    while (b < num) {
        // variável temporaria
        let temp = b;
        // o valor de A vira o B e B virá a soma dos valores antigos de A e B
        b = a + b;
        a = temp;
    }

    if (num == b) {
        return true;
    }

    return false;
}

const num = 7;
console.log(`O número [${num}] ${isFibonacci(num) ? 'pertence' : 'não pertence'} à sequência de Fibonacci`);

// Mini Projeto 10
// criar função para mostrar todos os numeros primos com base em no numero dado

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        let ehPrimo = true;
        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) console.log(numero);
    }
}
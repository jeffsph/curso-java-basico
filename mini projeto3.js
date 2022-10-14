//Mini Projeto 3
//aprendento fizzBuzz

const resul = fizzBuzz(true);
console.log(resul);

function fizzBuzz(entrada) {
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz!';
    if (entrada % 3 === 0)
        return 'Fizz!';
    if (entrada % 5 === 0)
        return 'Buzz!';
    if (typeof entrada !== 'number')
        return 'Não é um número!';
    return entrada;
}
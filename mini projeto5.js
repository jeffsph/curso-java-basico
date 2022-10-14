// Mini projeto 5
// exibir numeros informando quais são impar e quais são par!

exibirTipo(6)
function exibirTipo(limite) {
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0)
            console.log(i, 'par')
        else
            console.log(i, 'impar')
    }
}

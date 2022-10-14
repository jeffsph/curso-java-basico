// Mini Projeto 9
// exibir asteriscos com base na linha que esteja 

exibirAsterisco(10);

function exibirAsterisco(linhas) {
    let padrao = '';
    for (let linha = 1; linha <= linhas; linha++) {
        padrao += '*';
        console.log(padrao);
    }
}
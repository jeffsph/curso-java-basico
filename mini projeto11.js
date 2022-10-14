// Mini projeto 11
// Objeto endereço
// criar um objeto endereço que contem:
// rua
// cidade
// CEP
// exibirEndereço(endereco)

let endereco = {
    rua: 'maria josé cavalcante',
    cidade: 'arcoverde',
    cep: 56545625
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}

exibirEndereco(local);

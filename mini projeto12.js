// Mini Projeto 12
// Igualdade de objetos

function local(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
}
const endereco1 = new local('a', 'b', 'c');
const endereco2 = new local('a', 'b', 'c');

function saoIguais(endereco1, endereco2) {
    // comparar se as propriedades são iguais
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep
}
console.log(saoIguais(endereco1, endereco2));

function temEndereçoMemoriaIguais(endereco1, endereco2) {
    //comparar se a referencia do objeto aponta para o mesmo local na memoria
    return endereco1 === endereco2;
}
console.log(temEndereçoMemoriaIguais(endereco1,endereco2))
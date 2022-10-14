// Mini Projeto 6
//criar uma função para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo : 'O Incrivel Hulk',
    lançamento : 2012,
    diretor : 'Não identificado',
    personagem : 'Hulk'
}
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}


// Mini Projeto 13
// Eu quero que você crie um objeto de postagem de blog que vai contar
// as seguintes propriedades
// postagem
/*titulo
mensagem
autor
vizualizações
comentarios
    (autor,mensagem)
estaAoVivo
*/
let postagem = {
    titulo: 'Eleições',
    mensagem: 'Saiu o resultado',
    autor: 'Folha SP',
    vizualizacoes: 22,
    comentarios: [
        { autor: 'Nelson', mensagem: 'jesuus' },
        { autor: 'Nelson', mensagem: 'jesuus' }
    ],
    estaAoVivo: true
}
console.log(postagem);
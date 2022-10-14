// Mini Projeto 14
// postagem de blog so que ultilizando constructor function

function Postagem(titulo, text, autor) {
    this.titulo = titulo,
        this.text = text,
        this.autor = autor,
        this.visualizacoes = 0,
        this.comentario = [],
        this.estaAoVivo = false
}
let postagem= new Postagem('Policia','Baralho','Carvalho');
console.log(postagem);
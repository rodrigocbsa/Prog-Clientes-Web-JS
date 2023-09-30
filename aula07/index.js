class Filme{
    descricao = '';
    rating = 0.0;

    constructor(descricao = '', rating = 0.0){
        this.descricao = descricao;
        this.rating = rating;
    }
}

const filmes = [];
const f1 = new Filme("Filme 1",3.2);
const f2 = new Filme("Filme 2",9.9);
const f3 = new Filme("Filme 3",1.0);
filmes.push(f1,f2,f3);

const filmeParaLinha = (filme) => document.querySelector('tbody').innerHTML += `<tr><td>${filme.descricao}</td><td>${filme.rating}</td></tr>`;

document.addEventListener('DOMContentLoaded', () => {
    for(f of filmes){
        filmeParaLinha(f);
    }
});
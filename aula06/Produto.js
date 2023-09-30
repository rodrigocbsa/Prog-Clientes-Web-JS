export class Produto{
    descricao = '';
    estoque = 0;
    preco = 0.0;
    markup = 0.1;

    constructor( descricao, estoque, preco){
        this.descricao = descricao;
        this.estoque = estoque;
        this.preco = preco;
    }

    precoVenda(){
        return this.preco * this.markup;
    }
}
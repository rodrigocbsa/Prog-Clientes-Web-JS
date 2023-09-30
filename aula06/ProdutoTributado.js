import {Produto} from './Produto.js';

class ProdutoTributado extends Produto{
    imposto = 1;

    constructor(descricao, estoque, preco, imposto){
        super(descricao, estoque, preco);
        this.imposto = imposto;
    }

    precoVenda(){
        return super.precoVenda() * this.imposto;
    }
}
export default class{
    produto = null;
    quantidade = 0;

    constructor(produto,quantidade){
        this.produto = produto;
        this.quantidade = quantidade;
    }

    subTotal(){
        return this.produto.precoVenda() * this.quantidade;
    }
}
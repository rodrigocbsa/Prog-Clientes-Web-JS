import {VendaError} from './VendaError.js';

export class Venda {
    ItensDeVenda = [];

    adicionarItem(item) {
        if(!item){
            throw new VendaError("O item deve exisitir");
        }
        this.ItensDeVenda.push(item);
    }

    removerItemNaPosicao(pos) {
        if (pos < 0) {
            throw new VendaError('Posição inválida para remoção');
        }
        this.ItensDeVenda.splice(pos, 1);
    }

    itens() {
        return this.ItensDeVenda;
    }

    total() {
        let soma = 0;
        for (let el of this.ItensDeVenda) {
            soma += el.subTotal();
        }
    }
}
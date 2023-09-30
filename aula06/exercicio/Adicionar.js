import {PRODUTO_ESCOLHIDO} from "./Pesquisar.js";
import ItemVenda from "../ItemVenda.js";
import {Venda} from "../Venda.js";
import { VendaError } from "../VendaError.js";

const venda = new Venda();

export function Adicionar(){
    if(!PRODUTO_ESCOLHIDO){
        throw new VendaError("You found an Easter Egg!");
    }
    const item = new ItemVenda(PRODUTO_ESCOLHIDO,1);
    venda.adicionarItem(item);

    document.querySelector( 'tbody' ).innerHTML +=
        `<tr>
            <td></td>
            <td>${item.produto.descricao}</td>
            <td>${item.quantidade}</td>
            <td>${item.produto.precoVenda()}</td>
            <td>${item.subTotal()}</td>
        </tr>`; // Parte de quantidade: input de number. Valor default = 1

    document.querySelector('output').innerText = venda.total();
}
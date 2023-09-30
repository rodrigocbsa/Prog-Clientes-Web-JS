import { ObterDados } from "./storage.js";

export let PRODUTO_ESCOLHIDO = null;

export function Pesquisar(){
    const desc = document.getElementById('pesquisa').value;
    const produtos = ObterDados();
    
    for(const p of produtos){
        if(p.descricao.includes(desc.toUpperCase())){
            document.getElementById('descricao-pesquisa').value = p.descricao;
            document.getElementById('preco-pesquisa').value = p.preco;
            PRODUTO_ESCOLHIDO = p;
            return;
        }
    }

    alert("Produto não encontrado");
};
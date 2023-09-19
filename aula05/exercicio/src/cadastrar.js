import { obterContatos, salvar } from './repo.js';

document.addEventListener( 'DOMContentLoaded', aoCarregar );

function aoCarregar() {
    document.getElementById( 'adicionar' ).addEventListener( 'click', cadastrar );
}

export function cadastrar( event ){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    const contato = { nome, telefone, email};

    let contatos = obterContatos();
    contatos.push(contato);
    salvar(contatos);

    alert("Contato salvo");
}
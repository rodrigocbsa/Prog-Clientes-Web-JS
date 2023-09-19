import { obterContatos } from './repo.js';
import { alterar } from './alterar.js';
import { remover } from './remover.js';

document.addEventListener( 'DOMContentLoaded', listar );

function listar(){
    const contatos = obterContatos();

    for(let contato of contatos){
        const linha = document.createElement('tr');

        const tdNome = document.createElement('td');
        const tdTelefone = document.createElement('td');
        const tdEmail = document.createElement('td');
        const tdRemover = document.createElement('td');
        const tdEditar = document.createElement('td');

        const buttonRemover = document.createElement('button');
        buttonRemover.innerText = "Remover";
        tdRemover.appendChild(buttonRemover);
        const buttonEditar = document.createElement('button');
        buttonEditar.innerText = "Editar";
        tdEditar.appendChild(buttonEditar);

        tdNome.innerText = contato.nome;
        tdTelefone.innerText = contato.telefone;
        tdEmail.innerText = contato.email;

        buttonRemover.addEventListener('click', function(){
            remover(linha.sectionRowIndex);
            linha.remove();
        });
        buttonEditar.addEventListener('click', function(){
            alterar(linha.sectionRowIndex);
        })

        linha.append(tdNome,tdTelefone,tdEmail,tdRemover,tdEditar);
        document.querySelector('tbody').appendChild(linha);
    }
}


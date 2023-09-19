import {obterContatos, salvar} from './repo.js';

export function alterar(id){
    let contatos = obterContatos();

    document.getElementById('nome').value = contatos[id].nome;
    document.getElementById('telefone').value = contatos[id].telefone;
    document.getElementById('email').value = contatos[id].email;
    document.getElementById('edit').classList.remove('hidden');

    document.getElementById('salvar').addEventListener('click', function(){
        contatos[id].nome = document.getElementById('nome').value;
        contatos[id].telefone = document.getElementById('telefone').value;
        contatos[id].email = document.getElementById('email').value;

        salvar(contatos);

        document.getElementById('edit').classList.add('hidden');
        alert('Contato atualizado');
        location.href = 'listagem.html';
    });
}
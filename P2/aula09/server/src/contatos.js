fetch('http://localhost:8080/contatos').then((response) =>{
    if(response.status >= 400){
        throw new Error('A');
    }
    return response.json();
}).then(contatos => desenhar(contatos)).catch(erro => alert(erro.message));

function desenhar(contatos){
    document.querySelector('ul').innerHTML = contatos.map(ct => `<li>ID: ${ct.id} - NOME: ${ct.nome} - TELEFONE: ${ct.telefone}</li>`);
}
document.getElementById('adicionar').addEventListener('click', adicionar);

/* Função ativada ao clicar no botão de adicionar tarefa (formulário html) */
function adicionar(){
    var desc = document.getElementById('descricao').value;
    if (!desc){
        alert('Adicione uma descrição');
        return;
    }
    var tarefa = criarTarefa(desc, false);
    salvarTarefa(tarefa);
    adicionarNaTabela(tarefa);
}
/* desenha o conteúdo na tabela */
function adicionarNaTabela(tarefa){
    var linha = document.createElement('tr');
    var tdId = document.createElement('td');
    var tdDescricao = document.createElement('td');
    var tdFeita = document.createElement('td');
    var tdRemover = document.createElement('td');
    var tdEditar = document.createElement('td');

    var buttonRemover = document.createElement('button');
    tdRemover.appendChild(buttonRemover);
    var buttonEditar = document.createElement('button');
    tdEditar.appendChild(buttonEditar);

    tdId.innerText = tarefa.id;
    tdDescricao.innerText = tarefa.descricao;
    tdFeita.innerText = tarefa.feita ? '✅' : '⏰';
    buttonRemover.innerText = "Remover";
    buttonEditar.innerText = "Editar";

    linha.append(tdId,tdDescricao,tdFeita,tdRemover,tdEditar);
    document.querySelector('tbody').appendChild(linha);


    // Adicionando Funcionalidade de remover 
    buttonRemover.addEventListener('click', function(){
        var tarefas = obterTarefas();
        tarefas.splice(linha.sectionRowIndex, 1);
        salvarTarefas(tarefas);
        linha.remove();
    });

    // Adicionando funcionalidade de edição
    buttonEditar.addEventListener('click', function(){
        var container = document.createElement('div');
        var input = document.createElement('input');
        var buttonSalvar = document.createElement('button');
        var buttonCancelar = document.createElement('button');

        input.type = "text";
        input.value = tarefa.descricao;
        input.id = 'nova-descricao'
        buttonCancelar.innerText = "Cancelar"
        buttonSalvar.innerText = `Salvar Task ${tarefa.id}`;

        container.append(input,buttonSalvar,buttonCancelar);
        document.querySelector('table').after(container);

        // funcionalidade de esconder o form
        buttonCancelar.addEventListener('click', function(){
            document.querySelector('table').nextSibling.remove();
        });

        // funcionalidade de salvar a edição respectiva
        buttonSalvar.addEventListener('click', function(){
            tarefa.descricao = document.getElementById('nova-descricao').value;
            var tarefas = obterTarefas();
            tarefas[linha.sectionRowIndex] = tarefa;
            salvarTarefas(tarefas);
            tdDescricao.innerText = tarefa.descricao;
        });
    });


    // Adicionando funcionalidade de alterar o 'feito' com duplo clique
    linha.addEventListener('dblclick', function(){
        var tarefas = obterTarefas();
        var tarefa = tarefas[linha.sectionRowIndex];
        tarefa.feita = !tarefa.feita;
        tarefas[linha.sectionRowIndex] = tarefa;
        salvarTarefas(tarefas);

        linha.childNodes[2].innerText = tarefa.feita ? '✅' : '⏰';
    });
}


/* Recupera as tarefas salvas */
window.addEventListener('load', function(){
    var tarefas = obterTarefas();
    for(var t of tarefas){
        adicionarNaTabela(t);
    }
});
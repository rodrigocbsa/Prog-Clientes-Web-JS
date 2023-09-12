document.getElementById( 'adicionar' )
    .addEventListener( 'click',  adicionar );


function adicionar() {
    var descricao = document.getElementById( 'tarefa' ).value;
    var tarefa = criarTarefa( descricao, false );
    salvarTarefa( tarefa );
    adicionarNaTabela( tarefa );
}

function adicionarNaTabela( tarefa ) {
    var tr = document.createElement( 'tr' );

    var tdId = document.createElement( 'td' );
    var tdDescricao = document.createElement( 'td' );
    var tdFeita = document.createElement( 'td' );
    var tdRemover = document.createElement( 'td' );
    var botaoRemover = document.createElement( 'button' );
    tdRemover.appendChild( botaoRemover );

    tdId.innerText = tarefa.id;
    tdDescricao.innerText = tarefa.descricao;
    tdFeita.innerText = transformarFeita( tarefa.feita );

    botaoRemover.innerText = 'Remover';
    botaoRemover.addEventListener( 'click', function() {
        console.log( 'Deve remover linha',  tr.sectionRowIndex );
        var tarefas = obterTarefas();
        tarefas.splice( tr.sectionRowIndex, 1 );
        salvarTodasAsTarefas( tarefas );
        tr.remove();
    } );

    tr.append( tdId, tdDescricao, tdFeita, tdRemover );

    tr.addEventListener( 'dblclick', function( event ) {
        console.log( 'Clicou na verdade em ', event.target );
        // console.log( 'Clicou em ', tr );
        console.log( tr.sectionRowIndex ); // Índice no tbody

        var tarefas = obterTarefas();
        var tarefa = tarefas[ tr.sectionRowIndex ];
        tarefa.feita = ! tarefa.feita;

        tarefas[ tr.sectionRowIndex ] = tarefa;
        salvarTodasAsTarefas( tarefas );

        // Atualiza a coluna "Feita"
        tr.childNodes[ 2 ].innerText = transformarFeita( tarefa.feita );
    } );

    document.querySelector( 'tbody' ).appendChild( tr );
}

function transformarFeita( feita ) {
    return feita ? '✅' : '🕜';
}

window.addEventListener( 'load', function() { // Quando a janela carregar
    var tarefas = obterTarefas();
    for ( var tarefa of tarefas ) {
        adicionarNaTabela( tarefa );
    }
} );
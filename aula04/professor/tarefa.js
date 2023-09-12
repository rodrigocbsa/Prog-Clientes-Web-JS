const CHAVE_TAREFAS = 'tarefas';
const CHAVE_ULTIMO_ID = 'ultimoId';

function criarTarefa( descricao, feita ) {
    var id = gerarId();
    return { id: id, descricao: descricao, feita: feita };
    // return { descricao, feita };
}

function gerarId() {
    var id = localStorage.getItem( CHAVE_ULTIMO_ID );
    if ( ! id ) {
        id = 1;
    } else {
        id = parseInt( id ) + 1;
    }
    localStorage.setItem( CHAVE_ULTIMO_ID, String( id ) );
    return id;
}



/**
 * Salva uma tarefa.
 *
 * @param {*} tarefa Tarefa a ser salva.
 */
function salvarTarefa( tarefa ) {
    var tarefas = obterTarefas(); // Array
    tarefas.push( tarefa );

    salvarTodasAsTarefas( tarefas );
}

/**
 * Salva todas as tarefas.
 *
 * @param {Array} tarefas Tarefas a serem salvas.
 */
function salvarTodasAsTarefas( tarefas ) {
    localStorage.setItem( CHAVE_TAREFAS, JSON.stringify( tarefas ) );
}

/**
 * Retorna todas as tarefas.
 *
 * @returns {Array} Tarefas armazenadas localmente.
 */
function obterTarefas() {
    var tarefas = localStorage.getItem( CHAVE_TAREFAS );
    if ( ! tarefas ) {
        tarefas = []; // Cria um novo array de tarefas
    } else {
        tarefas = JSON.parse( tarefas ); // String para Array
    }
    return tarefas;
}
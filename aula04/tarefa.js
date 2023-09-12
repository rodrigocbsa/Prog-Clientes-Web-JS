const CHAVE_TAREFAS = "tarefas";
const CHAVE_LAST_ID = "lastId";

/**
 * @param {*} descricao Descrição da tarefa a ser salva
 * @param {*} feita Tarefa foi feita ou não
 */
function criarTarefa(descricao, feita){
    var id = idGenerator();
    return { id, descricao, feita };
}

function idGenerator(){
    var id = localStorage.getItem( CHAVE_LAST_ID );
    if ( ! id ) {
        id = 1;
    } else {
        id = parseInt( id ) + 1;
    }
    localStorage.setItem( CHAVE_LAST_ID, String( id ) );
    return id;
}

/**
 * @param {*} tarefa Tarefa a ser salva
 */
function salvarTarefa(tarefa){
    var tarefas = obterTarefas();
    tarefas.push(tarefa);
    localStorage.setItem(CHAVE_TAREFAS, JSON.stringify(tarefas));
}

/**
 * @param {Array} tarefas Tarefas a serem salvas
 */
function salvarTarefas(tarefas){
    localStorage.setItem(CHAVE_TAREFAS, JSON.stringify(tarefas));
}


/**
 * @returns {Array} Tarefas armazenadas localmente
 */
function obterTarefas(){
    var tarefas = localStorage.getItem(CHAVE_TAREFAS);
    if(!tarefas){
        tarefas = [];
    }else{
        tarefas = JSON.parse(tarefas);
    }

    return tarefas;
}
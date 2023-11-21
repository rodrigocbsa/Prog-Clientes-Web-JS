import { API } from "./api.js";

async function cadastrarVeiculo( veiculo ) {
    const resposta = await fetch( API + '/veiculos',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( veiculo )
        } );
    if ( resposta.status >= 400 ) {
        throw new Error( 'Erro ao salvar o veículo.' );
    }
}

function obterVeiculo() {
    return {
        modelo: document.getElementById( 'modelo' ).value,
        ano: Number( document.getElementById( 'ano' ).value )
    };
}

function exibirMensagem( mensagem ) {
    document.getElementById( 'msg' ).innerText = mensagem;
}

document.getElementById( 'salvar' )
    .addEventListener( 'click',
async ( ev ) => {
    ev.preventDefault();
    const veiculo = obterVeiculo();
    try {
        await cadastrarVeiculo( veiculo );
        location.href = 'index.html'; // Redireciona
    } catch ( erro ) {
        exibirMensagem( erro.message );
    }
} );
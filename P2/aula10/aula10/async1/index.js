import { API } from "./api.js";

async function carregarVeiculos( pesquisa ) {
    // const resposta = await fetch( 'veiculos.json' );

    const url = API +
        ( pesquisa ? `/veiculos?q=${pesquisa}` : '/veiculos' );

    const resposta = await fetch( url );
    if ( resposta.status >= 400 ) {
        throw new Error( 'Erro ao consultar veículos.' );
    }
    return resposta.json(); // []
}

function desenharVeiculos( veiculos ) {
    document.querySelector( 'ul' )
        .innerHTML = veiculos.map(
            v => `<li data-id="${v.id}" >${v.id} - ${v.modelo} - ${v.ano} <button>Remover</button></li> <a href="alterar.html?${id}>Alterar</a`
        ).join( '\n' );

    const botoes = document.querySelectorAll( 'li button' );
    for ( const botao of botoes ) {
        botao.addEventListener( 'click', removerVeiculo );
    }
}

async function removerVeiculo( evento ) {
    const li = evento.target.parentElement;
    console.log( li.dataset.id );
    console.log( li.getAttribute( 'data-id' ) );
    const id = li.dataset.id;
    if ( ! confirm( `Deseja remover o veículo ${id}` ) ) {
        return;
    }
    try {
        await remover( id ); // Remove do Servidor
        li.remove(); // Remove do DOM
    } catch ( erro ) {
        alert( erro.message );
    }
}

async function remover( id ) {
    const response = await fetch( API + `/veiculos/${id}`, {
        method: 'DELETE'
    } );
    if ( ! response.ok ) { // response.status >= 400
        throw new Error( 'Erro ao remover o veículo ' + id );
    }
}



/* CHAMANDO AS FUNÇÕES */
// Ao carregar
( async function() {
    try {
        const veiculos = await carregarVeiculos();
        desenharVeiculos( veiculos );
    } catch ( erro ) {
        alert( erro.message );
    }
} )();

// Ao pesquisar
document.getElementById( 'pesquisar' )
    .addEventListener( 'click', async ( event ) => {
        event.preventDefault();
        const pesquisa = document.getElementById( 'pesquisa' ).value;
        try {
            const veiculos = await carregarVeiculos( pesquisa );
            desenharVeiculos( veiculos );
        } catch ( erro ) {
            alert( erro.message );
        }
    } );
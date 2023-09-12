var produtosAdicionados = [];

function produtoComCodigo( produtos, codigo ) {
    for ( var i in produtos ) {
        var p = produtos[ i ]; // objeto do array
        if ( p.codigo == codigo ) {
            return p;
        }
    }
    return null; // Não encontrado
}

function adicionar( event ) {
    event.preventDefault(); // Previne o form de enviar os dados

    var codigo = document.getElementById( 'codigo' ).value;
    var quantidade = parseInt(document.getElementById('quantidade').value);

    const produtoExistente = produtoComCodigo(
        produtosAdicionados, codigo );
    if ( produtoExistente ) {
        alert( 'Produto já adicionado.' );
        return;
    }

    var produto = produtoComCodigo( produtos, codigo );
    if ( ! produto ) {
        alert( 'Produto não encontrado.' );
        return;
    }

    if( quantidade > produto['estoque'] ){
        alert("Estoque disponível insuficiente.");
        return;
    }
    if(quantidade <= 0 || !quantidade){
        alert("Quantidade inválida.");
        return;
    }

    produto['estoque'] = quantidade;

    acrescentarNaTabela( produto );
    produtosAdicionados.push( produto );

    exibirTotalizacao( produtosAdicionados );

    atualizaEstoqueProduto(produtos, produto);
}

function atualizaEstoqueProduto(produtos, produto){
    for(var p of produtos){
        if(p == produto){
            p.estoque -= produto.estoque;
            return;
        }
    }
}

function acrescentarNaTabela( produto ) {
    var tbody = document.querySelector( 'tbody' );
    var linha = '<tr> ' +
        '<td>' + produto.id         + '</td>' +
        '<td>' + produto.descricao  + '</td>' +
        '<td>' + produto.estoque    + '</td>' +
        '<td>' + produto.preco      + '</td>' +
        '<td>' + produto.preco * produto.estoque + '</td>' +
        ' </tr>';
    tbody.innerHTML += linha;
}

function exibirTotalizacao( produtos ) {
    var somaEstoque = 0;
    var somaPreco = 0;
    for ( var i in produtos ) {
        var p = produtos[ i ];
        somaEstoque += p.estoque;
        somaPreco += p.preco;
    }
    var linha = '<tr> ' +
        '<td colspan="2" ></td>' +
        '<td>' + somaEstoque  + '</td>' +
        '<td></td>' +
        '<td>' + somaPreco    + '</td>' +
        ' </tr>';

    document.querySelector( 'tfoot' ).innerHTML = linha;
}

function remover( event ) {
    event.preventDefault(); // Evita enviar os dados

    var codigo = document.getElementById( 'codigo' ).value;
    var indice = -1; // Não encontrado
    for ( var i in produtosAdicionados ) {
        var p = produtosAdicionados[ i ];
        if ( p.codigo == codigo ) { // Encontrou
            indice = i;
            break;
        }
    }
    if ( indice < 0 ) {
        alert( 'Produto não encontrado nos adicionados.' );
    } else {
        produtosAdicionados.splice( indice, 1 );
    }
    console.log( produtosAdicionados );
    // document.querySelector( 'tbody tr:nth-child(' + indice + 1 + ')' ).remove();
    sobrescreverTabela( produtosAdicionados ); // tbody
}


function sobrescreverTabela( produtos ) {
    var tbody = document.querySelector( 'tbody' );
    tbody.innerHTML = ''; // zera
    for ( var i in produtos ) {
        var p = produtos[ i ];
        var linha = '<tr>' +
            '<td>' + p.id         + '</td>' +
            '<td>' + p.descricao  + '</td>' +
            '<td>' + p.estoque    + '</td>' +
            '<td>' + p.preco      + '</td>' +
            '</tr>';
        tbody.innerHTML += linha;
    }
    exibirTotalizacao( produtos );
}

document.getElementById( 'adicionar' ).onclick = adicionar;
document.getElementById( 'remover' ).onclick = remover;


var select = document.createElement('select');

// Renderizando os itens de seleção do select
var itens = [ 'Mesa', 'Cola', 'Prego', 'Martelo'];

for(var i in itens){
    var item = itens[i];
    var option = document.createElement('option');
    option.innerText = item;
    option.value = item;

    select.appendChild(option); // Adiciona a opção no select
}

// Inserindo o select antes da label
//var label = document.querySelector('label');
var label = document.body.firstChild;
document.body.insertBefore(select,label);


/******************************************************************************** */


var adicionados = [];

// Adicionando funcionalidade ao botão de adicionar à tabela
document.getElementById('add').addEventListener('click', function(){
    var produto = select.value;
    var valor = parseFloat( document.getElementById('valor').value );

    if (isNaN( valor )){
        alert("Por favor informe um número.");
        return;
    }

    var tr = document.createElement('tr');
    var tdProduto = document.createElement('td');
    var tdValor = document.createElement('td');

    tdProduto.innerText = produto;
    tdValor.innerText = valor;

    var item = { descricao: produto, valor: valor};
    adicionados.push(item);

    tr.append(tdProduto,tdValor);
    document.querySelector('tbody').appendChild(tr);

    var total = calcularTotal(adicionados);
    document.querySelector('tfoot tr td[data-total]').innerText = total;


    /// Colorindo linhas
    tr.addEventListener('click', function(){
        tr.classList.toggle('linha-amarela');
    });
});

function calcularTotal(itens){
    var soma = 0;
    for (var item of itens){
        soma += item.valor;
    }
    return soma;
}


/********************************************************************/

document.getElementById('remove').addEventListener('click', function(){
    var linhasSelecionadas = document.querySelectorAll('.linha-amarela');

    for(var el of linhasSelecionadas){
        var i = el.sectionRowIndex;
        adicionados.splice(i,1);
        el.remove();
    }

    var total = calcularTotal(adicionados);
    document.querySelector('tfoot tr td[data-total]').innerText = total;
});
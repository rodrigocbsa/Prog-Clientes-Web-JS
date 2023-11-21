async function carregarVeiculos(){
    const resposta = await fetch('http://localhost:3000/veiculos');
    if(resposta.status >= 400){
        throw new Error("Erro ao consultar os veículos.");
    }

    return resposta.json();
}

function desenharVeiculos( veiculos ){
    document.querySelector('ul').innerHTML = veiculos.map(v => `<li>${v.id} - ${v.modelo} (${v.ano})</li>`).join('\n');
}


try{
    (async function(){
        const veiculos = await carregarVeiculos();
        desenharVeiculos(veiculos);
    })
}catch(erro){
    console.log(erro.message);
    alert("Erro inesperado. Consulte o log.")
}

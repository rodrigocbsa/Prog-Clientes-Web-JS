import { API } from "api.js";

const parametros = new URLSearchParams(location.search);
const id = parametros.get('id');
if(!id || isNaN(Number(id))){
    alert("Consulta inválida");
    location.href = 'index.html';
}

let  response;
try{
    response = await fetch(API + `/veiculos/${id}`);
}catch(error){
    alert(error.message || 'Erro consultando veículo');
}
if(! response.ok ){
    if(response.status === 404){
        alert('Veículo não encontrado');
    }
    else{
        alert("Erro ao consultar o veículo");
    }
}

document.getElementById('modelo').value = response.modelo;
document.getElementById('ano').value = response.ano;

let respostaAlterar;
document.getElementById('alterar').addEventListener('click', async (event) => {
    event.preventDefault();
    try{
        respostaAlterar = await fetch(API + `/veiculos/${id}`,{
            method : 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(response)
        });
    }catch(error){
        //...
    }
    location.href = 'index.html';
})
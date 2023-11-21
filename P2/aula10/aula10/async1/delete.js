import { API } from './api.js';

async function deletarVeiculo( id ){
    const resposta = await fetch( API + '/veiculos/' + id,{method: 'DELETE'});
    if(resposta.status >= 400){
        throw new Error("Erro ao deletar veículo");
    }
    
}
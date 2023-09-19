import { KEY_CONTATOS } from "./repo.js";

export function remover(id){
    const contatos = JSON.parse(localStorage.getItem(KEY_CONTATOS));
    contatos.splice(id,1);
    localStorage.setItem(KEY_CONTATOS,JSON.stringify(contatos));
}
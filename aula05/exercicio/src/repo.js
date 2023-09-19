export const KEY_CONTATOS = 'contatos';

export function obterContatos(){
    let contatos = localStorage.getItem(KEY_CONTATOS);
    if(!contatos){
        return [];
    }
    return JSON.parse(contatos);
}

export function salvar(contatos){
    localStorage.setItem(KEY_CONTATOS,JSON.stringify(contatos));
}
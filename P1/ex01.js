import cs from './contatos.js';

cs.map(e => {
    let nomeCompleto = e.nome + ' ' + e.sobrenome;
    let telefone = '(' + e.tel.ddd + ') ' + e.tel.numero;
    return { nomeCompleto, telefone };
});

cs.filter(e => e.tel.ddd == "22");

cs.map(e => e.nome + ' ' + e.sobrenome + ' - ' +  "(" + e.tel.ddd + ") " + e.tel.numero );
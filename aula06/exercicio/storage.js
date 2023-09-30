import { Produto } from "../Produto.js";

export function ObterDados(){
    return objs;
}

/* Inserir dados na base de dados do PDV */
const p1 = new Produto("PAO FRANCES",100,0.4);
const p2 = new Produto("REFRIGERANTE COCA-COLA 2L",200,15.9);
const p3 = new Produto("PECA PICANHA 1KG",50,45.9);
const p4 = new Produto("CARVAO 10KG",10,20.0);
const objs = new Array();
objs.push(p1,p2,p3,p4);
import './storage.js';
import { Pesquisar } from './Pesquisar.js';
import { Adicionar } from './Adicionar.js';

document.getElementById('pesquisa').addEventListener('blur', Pesquisar);
document.getElementById('adiciona').addEventListener('click', Adicionar);
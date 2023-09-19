import { aoReceberFoco, aoPerderFoco } from './exports.js';

var inputs = document.querySelectorAll('input');
for (var input of inputs){
    input.addEventListener('focus', aoReceberFoco);
    input.addEventListener('blur', aoPerderFoco);
}
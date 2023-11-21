function concatenar(array1, array2) {
    return [...array1, ...array2];
}

function concatenar(matriz) {
    let array = [];
    for (a of matriz) {
        array.push(...a)
    }
}

function clonar(obj) {
    return { ...obj }; // Shallow Copy (cópia rasa*)
}
//* se obj for composto, será clonado como uma referência (ponteiro!)
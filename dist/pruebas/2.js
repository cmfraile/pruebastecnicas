"use strict";
console.clear();
//Dada una cadena de texto, comprobar si es un palíndromo:
const main = (valor) => {
    const original = valor;
    const invertida = valor.split('').reverse().join('');
    if (original == invertida) {
        console.log("Son palíndromos");
    }
    else {
        console.log("no son palindromos");
    }
    ;
};
main('boba');
//# sourceMappingURL=2.js.map
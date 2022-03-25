"use strict";
console.clear();
//Dados dos array, determinar si son anagramas (es decir, que usan los mismos caracteres y en la misma cantidad);
const main = (cadena1, cadena2) => {
    var _a, _b;
    const objs = { n1: (_a = cadena1.toUpperCase().match(/[AEIOU]/gi)) === null || _a === void 0 ? void 0 : _a.sort().join(''), n2: (_b = cadena2.toUpperCase().match(/[AEIOU]/gi)) === null || _b === void 0 ? void 0 : _b.sort().join('') };
    if (objs.n1 == objs.n2) {
        console.log("Son anagramas");
    }
    else {
        console.log("No son anagramas");
    }
    ;
};
main('El perro de san roque no tiene rabo', 'El perro de san roque no tiene rabo');
//# sourceMappingURL=app.js.map
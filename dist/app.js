"use strict";
console.clear();
//Dado un array de numeros y cadenas, devolver el array sin números duplicados ni cadenas:
const main = (array) => {
    let primerfiltro = array.filter((x) => { if (typeof (x) == 'number') {
        return true;
    }
    else {
        return false;
    } });
    primerfiltro.map((x) => {
        console.log(x, primerfiltro.join(','));
    });
    console.log(primerfiltro);
};
main([12, 13, 14, 15, 15, 15, 12, 'webo']);
//# sourceMappingURL=app.js.map
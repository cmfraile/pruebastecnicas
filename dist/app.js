"use strict";
console.clear();
//Dado un array de string, sacar los valores que estan formados por mas de dos palabras:
const main = (valores) => {
    console.log(valores.filter((x) => { if (x.split(' ').length !== 1) {
        return true;
    }
    else {
        return false;
    } }));
};
main(['Córdoba', 'Badajoz', 'Ciudad Real', 'Barcelona', 'San Cougat']);
//# sourceMappingURL=app.js.map
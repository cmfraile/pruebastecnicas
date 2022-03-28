"use strict";
console.clear();
//Dado un array o texto, devolver el elemento que mas aparece:
const main = (elemento) => {
    let top = "";
    let contador = 0;
    switch (typeof (elemento)) {
        case 'string':
            elemento.split(' ').forEach((x) => {
                var _a;
                let casos = ((_a = elemento.match(RegExp(x, 'gi'))) === null || _a === void 0 ? void 0 : _a.length) || 0;
                if (casos > contador) {
                    top = x;
                    contador = casos;
                }
            });
            console.log(`El término mas empleado en la cadena es [${top}], usado en [${contador}] ocasiones.`);
            ;
            break;
        default:
            let cuenta = {};
            elemento.forEach((x) => { if (!cuenta[x]) {
                cuenta[x] = 1;
            }
            else {
                cuenta[x]++;
            } });
            for (let x in cuenta) {
                if (cuenta[x] > contador) {
                    top = x;
                    contador = cuenta[x];
                }
            }
            console.log(`El dato mas empleado en el array es [${top}], usando en [${contador}] ocasiones.`);
            ;
            break;
    }
};
main([12, 12, 12, 12, 'mamawebo']);
//# sourceMappingURL=app.js.map
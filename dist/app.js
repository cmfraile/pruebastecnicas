"use strict";
console.clear();
//Dado un array de arrays con alumnos y notas, mostrar una lista con los alumnos aprobados y suspensos.
const main = (alumnos) => {
    let aprobados = "\nLista de aprobados:\n";
    let suspensos = "\nLista de suspensos:\n";
    alumnos.forEach((x) => {
        if (x[1] >= 5) {
            aprobados += `${x[0]} [${x[1]}]\n`;
        }
        else {
            suspensos += `${x[0]} [${x[1]}]\n`;
        }
        ;
    });
    console.log(`${aprobados}${suspensos}`);
};
main([['Alfredo', 9], ['Arturo', 3], ['Soraya', 7], ['Eugenia', 6], ['Alberto', 9], ['Pepe', 2]]);
//# sourceMappingURL=app.js.map
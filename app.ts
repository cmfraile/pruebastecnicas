console.clear();

//Dado un objeto, comprobar cuantos bucles posee (que al dibujarlo, genere x circulos):

const main = (valor:number) => {
    let cuentabucles:number = 0;
    const listabucles:any = {0:1,1:0,2:0,3:0,4:0,5:0,6:1,7:0,8:2,9:1};
    valor.toString().split('').map((x:string) => {cuentabucles += listabucles[x]});
    console.log(`El valor introducido [${valor}] posee [${cuentabucles}] bucles`);
};

main(888);
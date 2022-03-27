console.clear();

//Dado un array de numeros y cadenas, devolver el array sin números duplicados ni cadenas:

const main = (array:(number|string)[]) => {
    let primerfiltro:any[] = array.filter( (x:any) => {if(typeof(x) == 'number'){return true}else{return false}});
    primerfiltro.map((x) => {
        
        console.log(x,primerfiltro.join(','))
    })
    console.log(primerfiltro);
};

main([12,13,14,15,15,15,12,'webo']);
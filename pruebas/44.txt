console.clear();

//Dado un array de string, sacar los valores que estan formados por mas de dos palabras:

const main = (valores:string[]) => {
    console.log(valores.filter((x:string) => {if(x.split(' ').length !== 1){return true}else{return false}}));
};

main(['Córdoba','Badajoz','Ciudad Real','Barcelona','San Cougat']);
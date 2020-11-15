function kolmionAla(a,b){   
    if(a === undefined || a === null){
        throw new Error('Ei parametrejä annettu');
    }
    if(b === undefined || b === null){
        throw new Error('Vain toinen parametri annettu');
    }
    let ala = Number(a)*Number(b)/Number(2);
    ala = Math.round(ala * 100) / 100;
    if(ala < 0){
        throw new Error('Kolmion sivun pituus ei voi olla negatiivinen');
    }
    if(Number.isNaN(ala)){
        throw new Error('Ei lukuja');
    }
    
    return ala;
}
module.exports =kolmionAla;
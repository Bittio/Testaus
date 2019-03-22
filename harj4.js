function kolmionAla(a,b){
    let kerto = Number(a)*Number(b);
    if(Number.isNaN(kerto)){
        throw new Error('Ei lukuja');
    }
    return kerto;
}
module.exports =kolmionAla;
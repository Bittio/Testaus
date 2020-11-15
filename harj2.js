function osamaara(a,b){
    if(a === undefined || a === null){
        throw new Error('nolla parametriä annettu');
    }
    if(b === undefined || b === null){
        throw new Error('b parametriä ei annettu');
    }
    if(Number(b) === 0) {
        throw new Error('Nollalla ei voi jakaa');
    }
    let jako = Number(a)/Number(b);
    if(Number.isNaN(jako)){
        throw new Error('Ei lukuja');
    }
    return jako;
}

module.exports =osamaara;
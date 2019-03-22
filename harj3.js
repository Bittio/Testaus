function lipunHinta(a){
    if(a === undefined || a === null){
        throw new Error('nolla parametriä annettu');
    }
    if(a < 7){
        return 0;
    } else if (a < 16 && a > 7){
        return 1;
    } else if (a >= 16 && a <= 25){
        return 1.5;
    } else if (a > 25 && a < 65){
        return 3;
    } else {
        return 1.5;
    }
}
module.exports =lipunHinta;
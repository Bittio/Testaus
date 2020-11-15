function ika(a){
    if(a === undefined || a === null){
        throw new Error('ikää ei annettu');
    }
    let ika = Number(a);
    if(Number.isNaN(ika)){
        throw new Error('Parametri ei ole lukuja');
    }
    if(a < 7){
        return 0;
    } else if (a < 16 && a > 7){
        return 1;
    } else if (a >= 16 && a <= 25){
        return 2;
    } else if (a > 25 && a < 65){
        return 3;
    } else {
        return 4;
    }
}
module.exports =ika;
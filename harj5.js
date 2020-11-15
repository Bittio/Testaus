function hinta(a){
    let kerto = Number(a);
    if(a === undefined || a === null){
        throw new Error('nolla parametriä annettu');
    }
    if(a < 0){
        throw new Error('Hinta ei voi olla negatiivinen');
    }   
    if(a == 0){
        throw new Error('Hinta ei voi olla nolla');
    } 
    if(a > 0 && a < 100){
        kerto = Number(a);
    }  
    if(a >= 100 && a <= 200){
        kerto = Number(a) * 0.95;
    } 
    if (a > 200 && a < 500){
        kerto = Number(a) * 0.9;
    } 
    if (a >= 500){  
        kerto = Number(a) * 0.85;
    }
    if(Number.isNaN(kerto)){
        throw new Error('Parametri ei ole lukuja');
    }  
    kerto = Math.round(kerto * 100) / 100;
    return kerto;  
    
}
module.exports =hinta;
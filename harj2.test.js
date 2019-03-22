const osamaara = require('./harj2');

test ('suorittaa yhteenlaskun 1+2, tulos 3', () => {
    expect(osamaara(4, 2)).toBe(2);
});

test('syötteet ei numeromaisia merkkijonoja "Minna"+"Jaakko", heittää poikkeuksen', () => {
    expect(() => {osamaara("Minna","Jaakko")}).toThrow('Ei lukuja');
});

test('syötteet ei numeromaisia merkkijonoja "Minna"+"Jaakko", heittää poikkeuksen', () => {
    expect(() => {osamaara(5,0)}).toThrow('Nollalla ei voi jakaa');
});

test ('suorittaa yhteenlaskun 1+2, tulos 3', () => {
    expect(osamaara(4)).toBe(4);
});

test('syötteet ei numeromaisia merkkijonoja "Minna"+"Jaakko", heittää poikkeuksen', () => {
    expect(() => {osamaara()}).toThrow('nolla parametriä annettu');
});
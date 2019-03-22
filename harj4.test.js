const kolmionAla = require('./harj4');

test ('suorittaa kertolaskun 4 * 2', () => {
    expect(kolmionAla(4, 2)).toBe(8);
});

test('syötteet ei numeromaisia merkkijonoja "Minna"+"Jaakko", heittää poikkeuksen', () => {
    expect(() => {kolmionAla("Minna","Jaakko")}).toThrow('Ei lukuja');
});

test('', () => {
    expect(kolmionAla(12.4, 6.7)).toBe(83.08);
});

test('Syötteistä toinen on nolla ', () => {
    expect(kolmionAla(89.5, 0)).toBe(0);
});
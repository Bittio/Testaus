const osamaara = require('./harj2');

test ('suorittaa jakolaskun 6 / 2 ', () => {
    expect(osamaara(6, 2)).toBe(3);
});
test('kokeillaan tekstillä', () => {
    expect(() => {osamaara("Päivää","Huomenta")}).toThrow('Ei lukuja');
});
test('kokeillaan jakaa nollalla', () => {
    expect(() => {osamaara(5,0)}).toThrow('Nollalla ei voi jakaa');
});
test ('kokeillaan sourittaa jakolaskua yhdella numerolla', () => {
    expect(() => {osamaara(5)}).toThrow('b parametriä ei annettu');
});
test('kokeillaan jättää arvot tyhjäksi', () => {
    expect(() => {osamaara()}).toThrow('nolla parametriä annettu');
});
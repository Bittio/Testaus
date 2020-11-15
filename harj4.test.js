const kolmionAla = require('./harj4');

test ('Laskee pintaala kolmiolle jonka kanta on 4 ja korkeus 2', () => {
    expect(kolmionAla(4, 2)).toBe(4);
});
test('kokeillaan tekstillä', () => {
    expect(() => {kolmionAla("Iltaa","morjesta")}).toThrow('Ei lukuja');
});
test('Syötteistä toinen on nolla ', () => {
    expect(kolmionAla(50, 0)).toBe(0);
});
test('Kokeillaan syöttää negatiivinen kolmion sivun pituus', () => {
    expect(() => {kolmionAla(-5, 4)}).toThrow('Kolmion sivun pituus ei voi olla negatiivinen');
});
test('Kokeillaan että pyöristys kahteen desimaaliin toimii', () => {
    expect(kolmionAla(3.5, 3.5)).toBe(6.13);
});
test('Annetaan vain yksi parametri', () => {
    expect(() => {kolmionAla(65)}).toThrow('Vain toinen parametri annettu');
});
test('kokeillaan jättää arvot tyhjäksi', () => {
    expect(() => {kolmionAla()}).toThrow('Ei parametrejä annettu');
});
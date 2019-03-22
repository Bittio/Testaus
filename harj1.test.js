const ika = require('./harj1');
test('Tarkistaa onko henkilö täysi-ikäinen', () => {
    expect(ika(10)).toBe(false);
});
test('Tarkistaa onko henkilö täysi-ikäinen', () => {
    expect(ika(19)).toBe(true);
});
test('Tarkistaa tyhjänä', () => {
    expect(() => {
    ika()}).toThrow('ei parametrejä');
});
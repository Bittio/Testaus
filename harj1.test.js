const ika = require('./harj1');
test('Tarkistaa alaikaisuusden', () => {
    expect(ika(10)).toBe(false);
});
test('Tarkistaa täysi ikäisyyden', () => {
    expect(ika(19)).toBe(true);
});
test('Tarkistaa tyhjänä', () => {
    expect(() => {
    ika()}).toThrow('tyhja');
});
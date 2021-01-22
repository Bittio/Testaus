const number = require('./bonus1');
test('Tarkistaa tyhjänä', () => {
    expect(() => {
    number()}).toThrow('tyhja');
});
test('Tarkistaa väärällä puhelinnumerolla', () => {
    expect(number("564654654")).toBe(false);
});
test('Tarkistaa oikealla puhelinnumerolla', () => {
    expect(number("555-555 5555")).toBe(true);
});
test('Tarkistaa toisenlaisella oikealla puhelinnumerolla', () => {
    expect(number("0123456789")).toBe(true);
});
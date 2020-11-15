const hinta = require('./harj5');

test('kokeillaan olla antamatta parametrejä', () => {
    expect(() => {hinta()}).toThrow('nolla parametriä annettu');
});
test('kokeillaan tekstillä', () => {
    expect(() => {hinta("Moi","Huomenta")}).toThrow('Parametri ei ole lukuja');
});
test('Kokeillaan syöttää negatiivinen hinta', () => {
    expect(() => {hinta(-50)}).toThrow('Hinta ei voi olla negatiivinen');
});
test ('Testataan hinnalla 0', () => {
    expect(() => {hinta(0)}).toThrow('Hinta ei voi olla nolla');
});
test ('Testataan hinnalla 50', () => {
    expect(hinta(50)).toBe(50);
});
test ('Testataan hinnalla 100', () => {
    expect(hinta(100)).toBe(95);
});
test ('Testataan hinnalla 101', () => {
    expect(hinta(101)).toBe(95.95);
});
test ('Testataan hinnalla 200', () => {
    expect(hinta(200)).toBe(190);
});
test ('Testataan hinnalla 202', () => {
    expect(hinta(202)).toBe(181.8);
});
test ('Testataan hinnalla 500', () => {
    expect(hinta(500)).toBe(425);
});
test ('Testataan hinnalla 502', () => {
    expect(hinta(502)).toBe(426.7);
});
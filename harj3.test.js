const ika = require('./harj3');

test ('Testaa hinnan iälle 6', () => {
    expect(ika(6)).toBe(0);
});
test ('Testaa hinnan iälle 15', () => {
    expect(ika(15)).toBe(1);
});
test ('Testaa hinnan iälle 16', () => {
    expect(ika(16)).toBe(2);
});
test ('Testaa hinnan iälle 26', () => {
    expect(ika(26)).toBe(3);
});
test ('Testaa hinnan iälle 66', () => {
    expect(ika(66)).toBe(4);
});
test('kokeillaan olla antamatta parametrejä', () => {
    expect(() => {ika()}).toThrow('ikää ei annettu');
});
test('kokeillaan tekstillä', () => {
    expect(() => {ika("Päivää","Huomenta")}).toThrow('Parametri ei ole lukuja');
});
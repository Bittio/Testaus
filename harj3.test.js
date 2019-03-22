const lipunHinta = require('./harj3');

test ('Testaa hinnan iällä 6', () => {
    expect(lipunHinta(6)).toBe(0);
});

test ('Testaa hinnan iällä 15', () => {
    expect(lipunHinta(15)).toBe(1);
});

test ('Testaa hinnan iällä 16', () => {
    expect(lipunHinta(16)).toBe(1.5);
});

test ('Testaa hinnan iällä 26', () => {
    expect(lipunHinta(26)).toBe(3);
});

test ('Testaa hinnan iällä 66', () => {
    expect(lipunHinta(66)).toBe(1.5);
});

test('syötteet ei numeromaisia merkkijonoja "Minna"+"Jaakko", heittää poikkeuksen', () => {
    expect(() => {lipunHinta()}).toThrow('nolla parametriä annettu');
});
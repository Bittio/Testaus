const contacts = require('./bonus2');
let contact1 =  {firstname:"tiina", lastname:"partanen", phoneNumber:"kissa"};
let contact2 =  {firstname:"tiina", lastname:"partanen", phoneNumber:""};
test('Tarkistaa tyhjänä', () => {
    var contact = {firstname:"", lastname:"", phoneNumber:""};
    expect(() => {
    contacts(contact)}).toThrow('tyhja');
});
test('Tarkistaa etunimi tyhjänä', () => {
    var contact = {firstname:"", lastname:"langi", phoneNumber:"055-555 5555"};
    expect(() => {
    contacts(contact)}).toThrow('tyhja');
});
test('Tarkistaa sukunimi tyhjänä', () => {
    var contact = {firstname:"teo", lastname:"", phoneNumber:"055-555 5555"};
    expect(() => {
    contacts(contact)}).toThrow('tyhja');
});
test('Tarkistaa puhelinnumero tyhjänä', () => {
    var contact = {firstname:"teo", lastname:"langi", phoneNumber:""};
    expect(contacts(contact)).toEqual(contact);
});
test('Tarkistaa oikeilla tiedoilla', () => {
    var contact = {firstname:"teo", lastname:"langi", phoneNumber:"555-555 5555"};
    expect(contacts(contact)).toEqual(contact);
});
test('Tarkistaa toisella oikeilla tiedoilla', () => {
    var contact = {firstname:"teo", lastname:"langi", phoneNumber:"5555555555"};
    expect(contacts(contact)).toEqual(contact);
});
test('Tarkistaa väärällä puhelinnumerolla', () => {
    var contact = {firstname:"teo", lastname:"langi", phoneNumber:"555-555-5555"};
    expect(contacts(contact1)).toEqual(contact2);
});
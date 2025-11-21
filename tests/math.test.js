"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../src/math");
describe("sumar", () => {
    test("debe sumar dos numeros", () => {
        const resultado = (0, math_1.sumar)(2, 3);
        expect(resultado).toBe(5);
    });
});
describe("restar", () => {
    test("debe restar dos numeros", () => {
        const resultado = (0, math_1.restar)(7, 2);
        expect(resultado).toBe(5);
    });
});
describe("multiplicar", () => {
    test("debe multiplicar dos numeros", () => {
        const resultado = (0, math_1.multiplicar)(2, 5);
        expect(resultado).toBe(10);
    });
});
describe("dividir", () => {
    test("debe dividir dos numeros", () => {
        const resultado = (0, math_1.dividir)(10, 2);
        expect(resultado).toBe(5);
    });
});
//# sourceMappingURL=math.test.js.map
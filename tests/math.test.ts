import { sumar, restar, multiplicar, dividir } from "../src/math";

describe("sumar", () => {
    test("debe sumar dos numeros", () => {
        const resultado = sumar(2, 3);
        expect(resultado).toBe(5);
    });
})

describe("restar", () => {
    test("debe restar dos numeros", () => {
        const resultado = restar(7, 2);
        expect(resultado).toBe(5);
    });
})

describe("multiplicar", () => {
    test("debe multiplicar dos numeros", () => {
        const resultado = multiplicar(2, 5);
        expect(resultado).toBe(10);
    });
})

describe("dividir", () => {
    test("debe dividir dos numeros", () => {
        const resultado = dividir(10, 2);
        expect(resultado).toBe(5);
    });
})
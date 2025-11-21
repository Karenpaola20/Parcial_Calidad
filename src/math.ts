function sumar(a: number, b: number): number {
    return a + b;
}

function restar(a: number, b: number): number {
    return a - b;
}

function multiplicar(a: number, b: number): number {
    return a * b;
}

function dividir(a: number, b: number): number {
    return b === 0 ? 0 : a / b;
}

export { sumar, restar, multiplicar, dividir };
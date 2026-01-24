"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factCache = exports.fibCache = void 0;
exports.fibonacci = fibonacci;
exports.factorial = factorial;
exports.gcd = gcd;
exports.lcm = lcm;
exports.fibCache = new Map();
exports.factCache = new Map();
function fibonacci(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("fibonacci: n must be a non-negative integer.");
    }
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    if (exports.fibCache.has(n))
        return exports.fibCache.get(n);
    const result = fibonacci(n - 1) + fibonacci(n - 2);
    exports.fibCache.set(n, result);
    return result;
}
function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("factorial: n must be a non-negative integer.");
    }
    if (n === 0)
        return 1;
    if (exports.factCache.has(n))
        return exports.factCache.get(n);
    const result = n * factorial(n - 1);
    exports.factCache.set(n, result);
    return result;
}
function gcd(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("gcd: both arguments must be integers.");
    }
    while (b !== 0)
        [a, b] = [b, a % b];
    return Math.abs(a);
}
function lcm(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("lcm: both arguments must be integers.");
    }
    if (a === 0 || b === 0)
        return 0;
    return Math.abs(a * b) / gcd(a, b);
}
//# sourceMappingURL=misc.js.map
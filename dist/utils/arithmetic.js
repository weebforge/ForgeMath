"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = clamp;
exports.lerp = lerp;
exports.scaleNumber = scaleNumber;
exports.between = between;
function clamp(x, min, max) {
    if (min === undefined) {
        return max === undefined ? x : Math.max(x, max);
    }
    if (max === undefined) {
        return Math.min(x, min);
    }
    if (min > max) {
        ;
        [min, max] = [max, min];
    }
    return Math.min(Math.max(x, min), max);
}
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function scaleNumber(x, inMin, inMax, outMin, outMax) {
    return outMin + (x - inMin) * (outMax - outMin) / (inMax - inMin);
}
function between(x, min, max) {
    if (min > max) {
        ;
        [min, max] = [max, min];
    }
    return x >= min && x <= max;
}
//# sourceMappingURL=arithmetic.js.map
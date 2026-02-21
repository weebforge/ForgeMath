"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
class Vector {
    values;
    constructor(values) {
        if (!values.length) {
            throw new Error("Vector must have at least one value.");
        }
        if (!values.every((v) => typeof v === "number" && !isNaN(v))) {
            throw new Error("Vector values must be valid numbers.");
        }
        this.values = values;
    }
    get dimension() {
        return this.values.length;
    }
    magnitude() {
        return Math.sqrt(this.values.reduce((sum, v) => sum + v * v, 0));
    }
    add(other) {
        this.#assertSameDimension(other);
        return new Vector(this.values.map((v, i) => v + other.values[i]));
    }
    subtract(other) {
        this.#assertSameDimension(other);
        return new Vector(this.values.map((v, i) => v - other.values[i]));
    }
    scale(scalar) {
        return new Vector(this.values.map((v) => v * scalar));
    }
    dot(other) {
        this.#assertSameDimension(other);
        return this.values.reduce((sum, v, i) => sum + v * other.values[i], 0);
    }
    normalize() {
        const mag = this.magnitude();
        if (mag === 0)
            throw new Error("Cannot normalize a zero vector.");
        return this.scale(1 / mag);
    }
    clone() {
        return new Vector(this.values);
    }
    #assertSameDimension(other) {
        if (this.dimension !== other.dimension) {
            throw new Error("Vectors must have the same dimension.");
        }
    }
}
exports.Vector = Vector;
//# sourceMappingURL=Vector.js.map
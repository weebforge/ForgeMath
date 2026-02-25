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
    cross(other) {
        if (this.dimension !== 3 || other.dimension !== 3) {
            throw new Error("Cross product is only defined for 3D vectors.");
        }
        const [x1, y1, z1] = this.values;
        const [x2, y2, z2] = other.values;
        return new Vector([y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - y1 * x2]);
    }
    projectOnto(other) {
        this.#assertSameDimension(other);
        const denom = other.dot(other);
        if (denom === 0)
            throw new Error("Cannot project onto zero vector.");
        const scalar = this.dot(other) / denom;
        return other.scale(scalar);
    }
    angle(other) {
        this.#assertSameDimension(other);
        const mag1 = this.magnitude();
        const mag2 = other.magnitude();
        if (mag1 === 0 || mag2 === 0)
            throw new Error("Cannot compute angle with zero vector.");
        const cosTheta = this.dot(other) / (mag1 * mag2);
        const clamped = Math.max(-1, Math.min(1, cosTheta));
        return Math.acos(clamped);
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
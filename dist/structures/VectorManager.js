"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorManager = void 0;
const Vector_1 = require("./Vector");
class VectorManager {
    store = new Map();
    create(name, values) {
        const vector = new Vector_1.Vector(values);
        this.store.set(name, vector);
        return vector;
    }
    get(name) {
        const vector = this.store.get(name);
        if (!vector)
            throw new Error(`Vector "${name}" does not exist.`);
        return vector;
    }
    delete(name) {
        return this.store.delete(name);
    }
    exists(name) {
        return this.store.has(name);
    }
    clear() {
        this.store.clear();
    }
    list() {
        return [...this.store.keys()];
    }
}
exports.VectorManager = VectorManager;
//# sourceMappingURL=VectorManager.js.map
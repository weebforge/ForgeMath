import { Vector } from "./Vector";
export declare class VectorManager {
    private store;
    create(name: string, values: number[]): Vector;
    get(name: string): Vector;
    delete(name: string): boolean;
    exists(name: string): boolean;
    clear(): void;
    list(): string[];
}
//# sourceMappingURL=VectorManager.d.ts.map
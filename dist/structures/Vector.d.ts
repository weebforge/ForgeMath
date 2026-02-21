export declare class Vector {
    #private;
    readonly values: number[];
    constructor(values: number[]);
    get dimension(): number;
    magnitude(): number;
    add(other: Vector): Vector;
    subtract(other: Vector): Vector;
    scale(scalar: number): Vector;
    dot(other: Vector): number;
    normalize(): Vector;
    clone(): Vector;
}
//# sourceMappingURL=Vector.d.ts.map
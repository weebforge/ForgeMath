"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$sumHp",
    description: "Calculates the sum of n terms of the harmonic progression.",
    version: "1.0.1",
    args: [
        forgescript_1.Arg.requiredNumber("first", "The first term."),
        forgescript_1.Arg.requiredNumber("difference", "The common difference between two terms."),
        forgescript_1.Arg.requiredNumber("n", "The number of terms."),
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [first, diff, n]) {
        if (!Number.isInteger(n))
            return this.customError("n is not an integer.");
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += 1 / (first + i * diff);
        }
        return this.success(sum);
    },
});
//# sourceMappingURL=sumHp.js.map
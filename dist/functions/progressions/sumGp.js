"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$sumGp",
    description: "Calculates the sum of n terms of the geometric progression.",
    version: "1.0.1",
    args: [
        forgescript_1.Arg.requiredNumber("first", "The first term."),
        forgescript_1.Arg.requiredNumber("ratio", "The common ratio between two terms."),
        forgescript_1.Arg.requiredNumber("n", "The number of terms"),
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [first, ratio, n]) {
        if (n == Infinity)
            return this.success(first / (1 - ratio));
        if (!Number.isInteger(n))
            return this.customError("n is not an integer.");
        return this.success((first * (Math.pow(ratio, n) - 1)) / (Math.pow(ratio, n) - 1));
    },
});
//# sourceMappingURL=sumGp.js.map
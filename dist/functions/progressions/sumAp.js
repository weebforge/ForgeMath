"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$sumAp",
    description: "Calculates the sum of n terms of the arithmetic progression.",
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
        return this.success((n / 2) * (2 * first + (n - 1) * diff));
    },
});
//# sourceMappingURL=sumAp.js.map
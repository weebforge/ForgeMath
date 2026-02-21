"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$gp",
    description: "Calculates nth term of the geometric progression.",
    version: "1.0.1",
    args: [
        forgescript_1.Arg.requiredNumber("first", "The first term."),
        forgescript_1.Arg.requiredNumber("ratio", "The common ratio between two terms."),
        forgescript_1.Arg.requiredNumber("n", "The n to find nth term."),
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [first, ratio, n]) {
        if (!Number.isInteger(n))
            return this.customError("n is not an integer.");
        return this.success(first * Math.pow(ratio, n - 1));
    },
});
//# sourceMappingURL=gp.js.map
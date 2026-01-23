"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const misc_1 = require("../../utils/misc");
exports.default = new forgescript_1.NativeFunction({
    name: "$gcd",
    description: "Returns the greatest common divisor of two integers.",
    version: "1.0.0",
    args: [
        forgescript_1.Arg.requiredNumber("a", "First integer."),
        forgescript_1.Arg.requiredNumber("b", "Second integer.")
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [a, b]) {
        if (!Number.isInteger(a)) {
            return this.customError("a must be an integer.");
        }
        if (!Number.isInteger(b)) {
            return this.customError("b must be an integer.");
        }
        return this.success((0, misc_1.gcd)(a, b));
    },
});
//# sourceMappingURL=gcd.js.map
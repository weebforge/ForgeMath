"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$shiftLeft",
    description: "Shifts bits to the left by a given amount.",
    version: "1.0.0",
    args: [
        forgescript_1.Arg.requiredNumber("a", "Integer to shift."),
        forgescript_1.Arg.requiredNumber("b", "Shift amount.")
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
        return this.success(a << b);
    },
});
//# sourceMappingURL=shiftLeft.js.map
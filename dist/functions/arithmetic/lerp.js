"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const arithmetic_1 = require("../../utils/arithmetic");
exports.default = new forgescript_1.NativeFunction({
    name: "$lerp",
    description: "Linearly interpolates between two numbers.",
    version: "1.0.0",
    args: [
        forgescript_1.Arg.requiredNumber("a", "Starting value."),
        forgescript_1.Arg.requiredNumber("b", "Ending value."),
        forgescript_1.Arg.requiredNumber("t", "Interpolation factor (usually between 0 and 1).")
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [a, b, t]) {
        return this.success((0, arithmetic_1.lerp)(a, b, t));
    },
});
//# sourceMappingURL=lerp.js.map
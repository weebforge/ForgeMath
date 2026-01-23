"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const arithmetic_1 = require("../../utils/arithmetic");
exports.default = new forgescript_1.NativeFunction({
    name: "$clamp",
    description: "Clamps a number between a minimum and maximum value.",
    version: "1.0.0",
    args: [
        forgescript_1.Arg.requiredNumber("x", "The number to clamp."),
        forgescript_1.Arg.requiredNumber("min", "Minimum value."),
        forgescript_1.Arg.requiredNumber("max", "Maximum value.")
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [x, min, max]) {
        return this.success((0, arithmetic_1.clamp)(x, min, max));
    },
});
//# sourceMappingURL=clamp.js.map
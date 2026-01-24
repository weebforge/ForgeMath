"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const arithmetic_1 = require("../../utils/arithmetic");
exports.default = new forgescript_1.NativeFunction({
    name: "$scaleNumber",
    description: "Scales a number from one range to another.",
    version: "1.0.0",
    args: [
        forgescript_1.Arg.requiredNumber("x", "The value to scale."),
        forgescript_1.Arg.requiredNumber("inMin", "Input range minimum."),
        forgescript_1.Arg.requiredNumber("inMax", "Input range maximum."),
        forgescript_1.Arg.requiredNumber("outMin", "Output range minimum."),
        forgescript_1.Arg.requiredNumber("outMax", "Output range maximum."),
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [x, inMin, inMax, outMin, outMax]) {
        return this.success((0, arithmetic_1.scaleNumber)(x, inMin, inMax, outMin, outMax));
    },
});
//# sourceMappingURL=scaleNumber.js.map
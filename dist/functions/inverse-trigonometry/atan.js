"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$atan",
    aliases: ["$arctan"],
    description: "Calculates the inverse tangent (radians by default).",
    version: "1.0.0",
    args: [
        forgescript_1.Arg.requiredNumber("x", "Value to find inverse tangent of."),
        forgescript_1.Arg.optionalBoolean("asDeg", "Set to true to return degrees.")
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [x, asDeg]) {
        let result = Math.atan(x);
        if (asDeg === true) {
            result *= 180 / Math.PI;
        }
        return this.success(result);
    },
});
//# sourceMappingURL=atan.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$acos",
    aliases: ["$arccos"],
    description: "Calculates the inverse cosine (radians by default).",
    version: "1.0.0",
    args: [
        forgescript_1.Arg.requiredNumber("x", "Value between -1 and 1."),
        forgescript_1.Arg.optionalBoolean("asDeg", "Set to true to return degrees."),
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [x, asDeg]) {
        if (x < -1 || x > 1) {
            return this.customError("acos domain error: value must be between -1 and 1.");
        }
        let result = Math.acos(x);
        if (asDeg === true) {
            result *= 180 / Math.PI;
        }
        return this.success(result);
    },
});
//# sourceMappingURL=acos.js.map
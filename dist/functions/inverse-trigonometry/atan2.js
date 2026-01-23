"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$atan2",
    description: "Calculates the angle from Y and X coordinates (radians by default).",
    version: "1.0.0",
    args: [
        forgescript_1.Arg.requiredNumber("y", "Y coordinate."),
        forgescript_1.Arg.requiredNumber("x", "X coordinate."),
        forgescript_1.Arg.optionalBoolean("asDeg", "Set to true to return degrees.")
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [y, x, asDeg]) {
        let result = Math.atan2(y, x);
        if (asDeg === true) {
            result *= 180 / Math.PI;
        }
        return this.success(result);
    },
});
//# sourceMappingURL=atan2.js.map
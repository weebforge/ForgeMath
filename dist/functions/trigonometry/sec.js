"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$sec",
    aliases: ["$secant"],
    description: "Calculates the secant of an angle (radians by default).",
    version: "1.0.0",
    args: [
        forgescript_1.Arg.requiredNumber("angle", "Angle to find secant of."),
        forgescript_1.Arg.optionalBoolean("asDeg", "Set to true if the angle is in degrees.")
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [angle, asDeg]) {
        if (asDeg === true) {
            angle *= Math.PI / 180;
        }
        return this.success(1 / Math.cos(angle));
    },
});
//# sourceMappingURL=sec.js.map
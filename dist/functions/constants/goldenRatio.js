"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const ForgeMath_1 = require("../../structures/ForgeMath");
exports.default = new forgescript_1.NativeFunction({
    name: "$goldenRatio",
    aliases: ["$φ"],
    description: "Returns the golden ratio",
    version: "1.0.0",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    execute(ctx) {
        return this.success(ForgeMath_1.ForgeMath.Constants.GoldenRatio);
    },
});
//# sourceMappingURL=goldenRatio.js.map
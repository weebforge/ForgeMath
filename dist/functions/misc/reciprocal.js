"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$reciprocal",
    description: "Returns the reciprocal of a number (1/x).",
    version: "1.0.0",
    args: [
        forgescript_1.Arg.requiredNumber("x", "Number to invert.")
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [x]) {
        return this.success(1 / x);
    },
});
//# sourceMappingURL=reciprocal.js.map
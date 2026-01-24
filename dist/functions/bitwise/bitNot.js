"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$bitNot",
    description: "Performs a bitwise NOT operation on an integer.",
    version: "1.0.0",
    args: [forgescript_1.Arg.requiredNumber("a", "Integer to invert.")],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [a]) {
        if (!Number.isInteger(a)) {
            return this.customError("a must be an integer.");
        }
        return this.success(~a);
    },
});
//# sourceMappingURL=bitNot.js.map
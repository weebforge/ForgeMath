"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$hasFlag",
    description: "Checks whether a bit flag is set.",
    version: "1.0.0",
    args: [forgescript_1.Arg.requiredNumber("value", "Integer value."), forgescript_1.Arg.requiredNumber("flag", "Flag to check.")],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Boolean,
    execute(ctx, [value, flag]) {
        if (!Number.isInteger(value)) {
            return this.customError("value must be an integer.");
        }
        if (!Number.isInteger(flag)) {
            return this.customError("flag must be an integer.");
        }
        return this.success((value & flag) === flag);
    },
});
//# sourceMappingURL=hasFlag.js.map
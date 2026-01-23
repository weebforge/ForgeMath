"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const misc_1 = require("../../utils/misc");
exports.default = new forgescript_1.NativeFunction({
    name: "$factorial",
    description: "Returns the factorial of an integer (n!).",
    version: "1.0.0",
    args: [forgescript_1.Arg.requiredNumber("n", "Integer ≥ 0.")],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [n]) {
        if (!Number.isInteger(n)) {
            return this.customError("n must be an integer.");
        }
        if (n < 0) {
            return this.customError("n must be ≥ 0.");
        }
        return this.success((0, misc_1.fibonacci)(n));
    },
});
//# sourceMappingURL=factorial.js.map
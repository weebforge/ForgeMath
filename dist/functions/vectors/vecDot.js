"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const VectorManager_1 = require("../../structures/VectorManager");
exports.default = new forgescript_1.NativeFunction({
    name: "$vecDot",
    description: "Returns the dot product of two vectors.",
    version: "1.0.1",
    args: [forgescript_1.Arg.requiredString("name1", "First vector name"), forgescript_1.Arg.requiredString("name2", "Second vector name")],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [name1, name2]) {
        if (!(ctx.vectorManager instanceof VectorManager_1.VectorManager)) {
            return this.customError("No vectors have been created yet.");
        }
        try {
            const v1 = ctx.vectorManager.get(name1);
            const v2 = ctx.vectorManager.get(name2);
            return this.success(v1.dot(v2));
        }
        catch (err) {
            return this.customError(String(err));
        }
    },
});
//# sourceMappingURL=vecDot.js.map
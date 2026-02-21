"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const VectorManager_1 = require("../../structures/VectorManager");
exports.default = new forgescript_1.NativeFunction({
    name: "$vecSub",
    description: "Subtracts vectors sequentially and stores the result.",
    version: "1.0.1",
    args: [forgescript_1.Arg.requiredString("newName", "New vector name"), forgescript_1.Arg.restString("vectors", "Vector names", true)],
    brackets: true,
    unwrap: true,
    execute(ctx, [newName, names]) {
        if (!(ctx.vectorManager instanceof VectorManager_1.VectorManager)) {
            return this.customError("No vectors have been created yet.");
        }
        try {
            if (names.length < 2)
                return this.customError("At least two vectors are required.");
            let result = ctx.vectorManager.get(names[0]);
            for (let i = 1; i < names.length; i++) {
                const next = ctx.vectorManager.get(names[i]);
                result = result.subtract(next);
            }
            ctx.vectorManager.create(newName, result.values);
            return this.success();
        }
        catch (err) {
            return this.customError(String(err));
        }
    },
});
//# sourceMappingURL=vecSub.js.map
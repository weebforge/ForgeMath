"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const VectorManager_1 = require("../../structures/VectorManager");
exports.default = new forgescript_1.NativeFunction({
    name: "$vecNormalize",
    description: "Normalizes a vector and stores the result.",
    version: "1.0.1",
    args: [forgescript_1.Arg.requiredString("newName", "New vector name"), forgescript_1.Arg.requiredString("vector", "Vector name")],
    brackets: true,
    unwrap: true,
    execute(ctx, [newName, name]) {
        if (!(ctx.vectorManager instanceof VectorManager_1.VectorManager)) {
            return this.customError("No vectors have been created yet.");
        }
        try {
            const vector = ctx.vectorManager.get(name);
            const normalized = vector.normalize();
            ctx.vectorManager.create(newName, normalized.values);
            return this.success();
        }
        catch (err) {
            return this.customError(String(err));
        }
    },
});
//# sourceMappingURL=vecNormalize.js.map
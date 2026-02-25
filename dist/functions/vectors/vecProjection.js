"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const VectorManager_1 = require("../../structures/VectorManager");
exports.default = new forgescript_1.NativeFunction({
    name: "$vecProjection",
    aliases: ["$projectVector"],
    description: "Projects one vector onto another.",
    version: "1.0.1",
    args: [
        forgescript_1.Arg.requiredString("newName", "New vector name"),
        forgescript_1.Arg.requiredString("v1", "Vector to project"),
        forgescript_1.Arg.requiredString("v2", "Vector to project onto"),
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [newName, n1, n2]) {
        if (!(ctx.vectorManager instanceof VectorManager_1.VectorManager))
            return this.customError("No vectors have been created yet.");
        try {
            const v1 = ctx.vectorManager.get(n1);
            const v2 = ctx.vectorManager.get(n2);
            const result = v1.projectOnto(v2);
            ctx.vectorManager.create(newName, result.values);
            return this.success();
        }
        catch (err) {
            return this.customError(String(err));
        }
    },
});
//# sourceMappingURL=vecProjection.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const VectorManager_1 = require("../../structures/VectorManager");
exports.default = new forgescript_1.NativeFunction({
    name: "$vecScale",
    description: "Scales a vector by a scalar and stores the result.",
    version: "1.0.1",
    args: [
        forgescript_1.Arg.requiredString("newName", "New vector name"),
        forgescript_1.Arg.requiredString("vector", "Vector name"),
        forgescript_1.Arg.requiredNumber("scalar", "Scalar value"),
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [newName, name, scalar]) {
        if (!(ctx.vectorManager instanceof VectorManager_1.VectorManager)) {
            return this.customError("No vectors have been created yet.");
        }
        try {
            const vector = ctx.vectorManager.get(name);
            const scaled = vector.scale(scalar);
            ctx.vectorManager.create(newName, scaled.values);
            return this.success();
        }
        catch (err) {
            return this.customError(String(err));
        }
    },
});
//# sourceMappingURL=vecScale.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const VectorManager_1 = require("../../structures/VectorManager");
exports.default = new forgescript_1.NativeFunction({
    name: "$vecAngle",
    description: "Returns the angle between two vectors in radians.",
    version: "1.0.1",
    args: [
        forgescript_1.Arg.requiredString("v1", "First vector"),
        forgescript_1.Arg.requiredString("v2", "Second vector"),
        forgescript_1.Arg.optionalBoolean("asDeg", "Output in degrees"),
    ],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [n1, n2, asDeg]) {
        if (!(ctx.vectorManager instanceof VectorManager_1.VectorManager))
            return this.customError("No vectors have been created yet.");
        try {
            const v1 = ctx.vectorManager.get(n1);
            const v2 = ctx.vectorManager.get(n2);
            let angle = v1.angle(v2);
            return this.success(asDeg !== null && asDeg ? (angle * 180) / Math.PI : angle);
        }
        catch (err) {
            return this.customError(String(err));
        }
    },
});
//# sourceMappingURL=vecAngle.js.map
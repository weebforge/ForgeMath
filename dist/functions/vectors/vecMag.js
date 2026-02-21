"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const VectorManager_1 = require("../../structures/VectorManager");
exports.default = new forgescript_1.NativeFunction({
    name: "$vecMag",
    aliases: ["$vectorMagnitude"],
    description: "Returns the magnitude (length) of a vector.",
    version: "1.0.1",
    args: [forgescript_1.Arg.requiredString("name", "The name of the vector")],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Number,
    execute(ctx, [name]) {
        if (!(ctx.vectorManager instanceof VectorManager_1.VectorManager)) {
            return this.customError("No vectors have been created yet.");
        }
        try {
            const vector = ctx.vectorManager.get(name);
            return this.success(vector.magnitude());
        }
        catch (err) {
            return this.customError(String(err));
        }
    },
});
//# sourceMappingURL=vecMag.js.map
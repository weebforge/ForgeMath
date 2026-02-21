"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const VectorManager_1 = require("../../structures/VectorManager");
exports.default = new forgescript_1.NativeFunction({
    name: "$vector",
    aliases: ["$getVector"],
    description: "Returns the values of a vector.",
    version: "1.0.1",
    args: [forgescript_1.Arg.requiredString("name", "The name of the vector")],
    brackets: true,
    unwrap: true,
    output: forgescript_1.ArgType.Json,
    execute(ctx, [name]) {
        if (!(ctx.vectorManager instanceof VectorManager_1.VectorManager)) {
            return this.customError("No vectors have been created yet.");
        }
        try {
            return this.successJSON(ctx.vectorManager.get(name)?.values ?? []);
        }
        catch (err) {
            return this.customError(String(err));
        }
    },
});
//# sourceMappingURL=vector.js.map
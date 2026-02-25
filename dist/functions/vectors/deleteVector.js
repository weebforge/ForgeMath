"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const VectorManager_1 = require("../../structures/VectorManager");
exports.default = new forgescript_1.NativeFunction({
    name: "$deleteVector",
    description: "Deletes a vector by name.",
    version: "1.0.1",
    args: [forgescript_1.Arg.requiredString("name", "Vector name")],
    brackets: true,
    unwrap: true,
    execute(ctx, [name]) {
        if (!(ctx.vectorManager instanceof VectorManager_1.VectorManager))
            return this.customError("No vectors exist.");
        if (!ctx.vectorManager.delete(name))
            return this.customError(`Vector "${name}" does not exist.`);
        return this.success();
    },
});
//# sourceMappingURL=deleteVector.js.map
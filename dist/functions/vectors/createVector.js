"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const VectorManager_1 = require("../../structures/VectorManager");
exports.default = new forgescript_1.NativeFunction({
    name: "$createVector",
    aliases: ["$loadVector"],
    description: "Create a vector.",
    version: "1.0.1",
    args: [
        forgescript_1.Arg.requiredString("name", "The name of the vector"),
        forgescript_1.Arg.restNumber("values", "The values of the vector", true),
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [name, values]) {
        if (!(ctx.vectorManager instanceof VectorManager_1.VectorManager)) {
            ctx.vectorManager = new VectorManager_1.VectorManager();
        }
        if (values.length < 2) {
            return this.customError("Vector must have at least 2 values.");
        }
        ctx.vectorManager.create(name, values);
        return this.success();
    },
});
//# sourceMappingURL=createVector.js.map
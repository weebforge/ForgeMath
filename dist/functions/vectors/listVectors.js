"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const VectorManager_1 = require("../../structures/VectorManager");
const array_1 = __importDefault(require("@tryforge/forgescript/dist/functions/array"));
exports.default = new forgescript_1.NativeFunction({
    name: "$listVectors",
    description: "Lists all stored vector names.",
    version: "1.0.1",
    args: [forgescript_1.Arg.optionalString("sep", "Seperator to use")],
    brackets: false,
    unwrap: true,
    output: (0, array_1.default)(),
    execute(ctx, [sep]) {
        if (!(ctx.vectorManager instanceof VectorManager_1.VectorManager))
            return this.success("");
        const list = ctx.vectorManager.list();
        return this.success(list.join(sep ?? ", "));
    },
});
//# sourceMappingURL=listVectors.js.map
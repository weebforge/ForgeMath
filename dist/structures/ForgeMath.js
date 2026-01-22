"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeMath = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const constants_1 = require("../constants");
const node_path_1 = require("node:path");
class ForgeMath extends forgescript_1.ForgeExtension {
    name = "ForgeMath";
    description = require("../../package.json").description;
    version = require("../../package.json").version;
    static Constants = constants_1.Constants;
    init(client) {
        this.load((0, node_path_1.join)(__dirname, "..", "functions"));
    }
}
exports.ForgeMath = ForgeMath;
//# sourceMappingURL=ForgeMath.js.map
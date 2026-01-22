import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { ForgeMath } from "../../structures/ForgeMath"

export default new NativeFunction({
  name: "$pi",
    version: "1.0.0",
  description: "Returns the constant pi",
  aliases: ["$π"],
  unwrap: false,
  output: ArgType.Number,
  execute(ctx) {
    return this.success(ForgeMath.Constants.Pi)
  },
})
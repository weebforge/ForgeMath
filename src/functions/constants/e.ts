import { NativeFunction, ArgType } from "@tryforge/forgescript"
import { ForgeMath } from "../../structures/ForgeMath"

export default new NativeFunction({
  name: "$e",
  description: "Returns the constant e",
  version: "1.0.0",
  unwrap: false,
  output: ArgType.Number,
  execute(ctx) {
    return this.success(ForgeMath.Constants.E)
  },
})

import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"
import { fibonacci } from "../../utils/misc"

export default new NativeFunction({
  name: "$factorial",
  description: "Returns the factorial of an integer (n!).",
  version: "1.0.0",
  args: [Arg.requiredNumber("n", "Integer ≥ 0.")],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [n]) {
    if (!Number.isInteger(n)) {
      return this.customError("n must be an integer.")
    }
    if (n < 0) {
      return this.customError("n must be ≥ 0.")
    }

    return this.success(fibonacci(n))
  },
})

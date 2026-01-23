import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"
import { between } from "../../utils/arithmetic"

export default new NativeFunction({
  name: "$between",
  description: "Checks whether a number is between two values (inclusive).",
  version: "1.0.0",
  args: [
    Arg.requiredNumber("x", "The number to check."),
    Arg.requiredNumber("min", "Minimum value."),
    Arg.requiredNumber("max", "Maximum value.")
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Boolean,
  execute(ctx, [x, min, max]) {
    return this.success(between(x, min, max))
  },
})

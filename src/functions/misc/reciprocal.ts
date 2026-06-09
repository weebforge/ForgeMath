import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$reciprocal",
  description: "Returns the reciprocal of a number (1/x).",
  version: "1.0.0",
  args: [Arg.requiredNumber("x", "Number to invert.")],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [x]) {
    if (x !== 0) return this.customError("Cant divide by zero")
    return this.success(1 / x)
  },
})

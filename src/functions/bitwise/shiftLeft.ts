import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$shiftLeft",
  description: "Shifts bits to the left by a given amount.",
  version: "1.0.0",
  args: [Arg.requiredNumber("a", "Integer to shift."), Arg.requiredNumber("b", "Shift amount.")],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [a, b]) {
    if (!Number.isInteger(a)) {
      return this.customError("a must be an integer.")
    }
    if (!Number.isInteger(b)) {
      return this.customError("b must be an integer.")
    }

    return this.success(a << b)
  },
})

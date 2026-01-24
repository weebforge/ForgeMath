import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$shiftRight",
  description: "Shifts bits to the right (signed by default).",
  version: "1.0.0",
  args: [
    Arg.requiredNumber("a", "Integer to shift."),
    Arg.requiredNumber("b", "Shift amount."),
    Arg.optionalBoolean("unsigned", "Set to true for unsigned shift."),
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [a, b, unsigned]) {
    if (!Number.isInteger(a)) {
      return this.customError("a must be an integer.")
    }
    if (!Number.isInteger(b)) {
      return this.customError("b must be an integer.")
    }

    return this.success(unsigned === true ? a >>> b : a >> b)
  },
})

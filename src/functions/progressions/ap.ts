import { Arg, ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$ap",
  description: "Calculates nth term of the arithmetic progression.",
  version: "1.0.1",
  args: [
    Arg.requiredNumber("first", "The first term."),
    Arg.requiredNumber("difference", "The common difference between two terms."),
    Arg.requiredNumber("n", "The n to find nth term."),
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [first, diff, n]) {
    if (!Number.isInteger(n)) return this.customError("n is not an integer.")
    return this.success(first + (n - 1) * diff)
  },
})
